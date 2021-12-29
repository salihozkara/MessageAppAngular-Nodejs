const crypto = require("crypto");

function CreateKey() {
    const {publicKey,privateKey} = crypto.generateKeyPairSync("rsa",{
        modulusLength: 2048, //for secure hashing length of a hashfunction
    })
    return {publicKey,privateKey}
}

function objeToB64( obje ) {
    return Buffer.from(JSON.stringify(obje)).toString('base64')
}

function b64ToObje( b64 ) {
    return JSON.parse(Buffer.from(b64, 'base64').toString('utf8'));
}


function Sha256Encrypt(object,publicKey){
    plainText=objeToB64(object)
    return crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256"
    }, Buffer.from(plainText));
}

function Sha256Decrypt(buffer,privateKey){
    return b64ToObje(crypto.privateDecrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256"
    },buffer).toString())
}
function xorText(text1, text2){
    let result = '';

    for (let i = 0; i < 17; i++) {
        if (i === 8){
            result += ' '
            continue
        }
        result += xor(text1[i], text2[i])
    }

    return result;
}

function xor(num1, num2){
    return num1 ^ num2;
}

function text2Binary(text) {
    return Array.from(text)
        .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
        .map((bin) => "0".repeat(8 - bin.length) + bin)
        .join(" ");
}

function binaryToText(binary) {
//Convert the binary into an array of binary strings separated by whitespace.
    binary = binary.split(' ');
//convert from binary to decimals, then to characters.
    return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
}

function Spn16Encrypt(plainText,key){
    const cleanText = objeToB64(plainText);
    const textArray = doubleGroup(cleanText)
    let result = "";

    textArray.forEach(x => {
        const item = encrypt2Chr(x,key)
        result += item
        result += ' '
    });

    return binaryToText(result);
}

function Spn16Decrypt(plainText,key){
    const binaryArray = text2Binary(plainText).slice(0, -9)
    const textArray = byteGroup(binaryArray)
    let result = "";

    textArray.forEach(x => {
        const item = decrypt2Chr(x,key)
        result += item
        result += ' '
    });

    return b64ToObje(binaryToText(result));
}

function doubleGroup(text){
    return text.match(/.{1,2}/g)
}

function byteGroup(text){
    const tmp = text.replace(/ /g,'').match(/.{1,16}/g)

    return tmp.map((x) => {
        return x.slice(0, 8).concat(' ', x.slice(8, 16))
    })

}

function encrypt2Chr(text,key){
    const keyArray = doubleGroup(key)
    const keyBinaryArray = keyArray.map(x => {
        return text2Binary(x)
    })
    return keyBinaryArray.reduce( (acc, x, y) => {

        const tmp = xorText(x, acc)

        if (y < 2){
            return encryptBits(tmp)
        }

        return tmp;

    }, text2Binary(text))
}

function decrypt2Chr(text,key){

const keyArray = doubleGroup(key)
const keyBinaryArray = keyArray.map(x => {
    return text2Binary(x)
})
const reversedKeyBinaryArray = keyBinaryArray.slice().reverse()
    return reversedKeyBinaryArray.reduce( (acc, x, y) => {

        if (y > 0 && y !== 3){
            const selam = xorText(x, acc)
            return decryptBits(selam)
        }

        return xorText(x, acc)

    }, text)
}

function encryptBits(string){

    let result = "";
    result += string[2]
    result += string[9]
    result += string[13]
    result += string[5]

    result += string[10]
    result += string[0]
    result += string[15]
    result += string[4]
    result += ' '

    result += string[12]
    result += string[1]
    result += string[16]
    result += string[6]

    result += string[3]
    result += string[11]
    result += string[7]
    result += string[14]

    return result;
}

function decryptBits(string){

    let result = "";
    result += string[5]
    result += string[10]
    result += string[0]
    result += string[13]

    result += string[7]
    result += string[3]
    result += string[12]
    result += string[15]
    result += ' '

    result += string[1]
    result += string[4]
    result += string[14]
    result += string[9]

    result += string[2]
    result += string[16]
    result += string[6]
    result += string[11]

    return result;
}

module.exports={Sha256Decrypt,Sha256Encrypt,Spn16Decrypt,Spn16Encrypt,CreateKey}