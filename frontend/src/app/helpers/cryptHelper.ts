import { Buffer } from 'buffer';
import CompressHelper from './compressHelper';
import * as Forge from 'node-forge';

function objeToB64(obje: any): string {
  return Buffer.from(obje).toString('base64') + ' ';
}

function b64ToObje(b64: string): any {
  let message = Buffer.from(b64, 'base64').toString('utf8');
  return message;
}

export class SPN16 {
  private static string2Binary(string: string) {
    return string
      .split('')
      .map(function (char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
      })
      .join('');
  }

  private static binary2String(str: string) {
    var newBin = [];
    for (let i = 0; i < str.length; i += 8) {
      newBin.push(str.substring(i, i + 8));
    }
    var binCode = [];
    for (let i = 0; i < newBin.length; i++) {
      binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join('');
  }

  private static substitution(data: string) {
    let p_Data = '';
    p_Data += data[2];
    p_Data += data[8];
    p_Data += data[12];
    p_Data += data[5];
    p_Data += data[9];
    p_Data += data[0];
    p_Data += data[14];
    p_Data += data[4];
    p_Data += data[11];
    p_Data += data[1];
    p_Data += data[15];
    p_Data += data[6];
    p_Data += data[3];
    p_Data += data[10];
    p_Data += data[7];
    p_Data += data[13];
    return p_Data;
  }

  private static r_Substitution(data: string) {
    let rp_Data = '';
    rp_Data += data[5];
    rp_Data += data[9];
    rp_Data += data[0];
    rp_Data += data[12];
    rp_Data += data[7];
    rp_Data += data[3];
    rp_Data += data[11];
    rp_Data += data[14];
    rp_Data += data[1];
    rp_Data += data[4];
    rp_Data += data[13];
    rp_Data += data[8];
    rp_Data += data[2];
    rp_Data += data[15];
    rp_Data += data[6];
    rp_Data += data[10];
    return rp_Data;
  }

  private static xor(string: string, subKey: string) {
    let bin_xor = '';
    let xor = 0;
    for (let i = 0; i < string.length; i++) {
      xor = Number(string[i]) ^ Number(subKey[i]);
      bin_xor += String(xor);
    }
    return bin_xor;
  }
  static FileEncrypt(text: string, key: string) {
    let result = this.encrypt(text, key);
    return result;
  }
  static Messageencrypt = (text: string, key: string) => {
    text = objeToB64(text);
    let result = this.encrypt(text, key);
    result = CompressHelper.compress(result);

    return result;
  };
  private static encrypt(text: string, key: string) {
    text = JSON.stringify({ data: text }) + ' ';
    key = this.string2Binary(key);
    let cipherText = '';
    let bin_plainText = this.string2Binary(text);
    let data = bin_plainText;
    let xor_text = '';
    let s_Boxes = '';
    for (let i = 0; i < bin_plainText.length; i += 16) {
      data = bin_plainText.substring(i, i + 16);
      for (let j = 0; j < 64; j += 16) {
        xor_text = this.xor(data, key.substring(j, j + 16));

        if (j < 32) {
          s_Boxes = this.substitution(xor_text);
        } else {
          s_Boxes = xor_text;
        }
        data = s_Boxes;
      }
      cipherText += data;
    }
    return cipherText;
  }

  static FileDecrypt(text: string, key: string) {
    console.log(text);
    let result = this.decrypt(text, key);
    console.log(result);
    return result;
  }
  private static decrypt(text: string, key: string) {
    let s_Boxes = '';
    key = this.string2Binary(key);
    let cipher_Text = text;
    let plain_Text = '';
    let xor_text = '';
    let data = '';

    for (let i = 0; i < cipher_Text.length; i += 16) {
      data = cipher_Text.substring(i, i + 16);
      for (let j = 48; j >= 0; j -= 16) {
        xor_text = this.xor(data, key.substring(j, j + 16));

        if (j == 48 || j == 0) {
          s_Boxes = xor_text;
        } else {
          s_Boxes = this.r_Substitution(xor_text);
        }
        data = s_Boxes;
      }
      plain_Text += data;
    }
    let result: any = this.binary2String(plain_Text);
    try {
      result = JSON.parse(result);
    } catch (error) {
      let lastIndex = result.lastIndexOf('}');
      console.log(result.substring(0, lastIndex + 1));
      result = JSON.parse(result.substring(0, lastIndex + 1));
    }
    return result.data;
  }
  static Messagedecrypt = (text: string, key: string) => {
    text = CompressHelper.decompress(text);
    let result = this.decrypt(text, key);
    return b64ToObje(result);
  };
}

export class SHA256 {
  private static splitString = '(|&';
  static encrypt(text: string, publicKey: string) {
    const rsa = Forge.pki.publicKeyFromPem(publicKey);
    let textArray = text.match(/.{1,100}/g);
    let result = '';
    textArray.forEach((t) => {
      result += rsa.encrypt(t) + this.splitString;
    });
    text = CompressHelper.compress(result);
    return text;
  }
  static decrypt(text: string, privateKey: string) {
    text = CompressHelper.decompress(text);
    let result = '';
    const rsa = Forge.pki.privateKeyFromPem(privateKey);
    let textArray = text.split(this.splitString);
    textArray=textArray.filter(t=>t.length>0)
    textArray.forEach((t) => {
      result += rsa.decrypt(t);
    });
    return result;
  }
}
