import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';
@Injectable({
  providedIn: 'root',
})
export class KeyService {
  constructor() {}
  static getKey = () => 'mysecret';
  static createKeysPem() {
    let keys = Forge.pki.rsa.generateKeyPair();
    let publicKeyPem = Forge.pki.publicKeyToPem(keys.publicKey);
    let privateKeyPem = Forge.pki.privateKeyToPem(keys.privateKey);
    return { publicKeyPem: publicKeyPem, privateKeyPem: privateKeyPem };
  }
}
