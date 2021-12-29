import { KeyService } from '../services/key.service';
import Message, { MessageHasher, MessageType } from './../models/messageModel';
import { SHA256, SPN16 } from './cryptHelper';
export default class HasherHelper {
  static Decrypt(message: Message): string {
    switch (message.messageHasher) {
      case MessageHasher.SPN16:
        if (message.messageType == MessageType.string)
          return SPN16.Messagedecrypt(message.message, KeyService.getKey());
        else if (message.messageType == MessageType.file)
          return SPN16.FileDecrypt(message.message, KeyService.getKey());
        break;
case MessageHasher.SHA256:
    //return SHA256.decrypt(message.message,KeyService.getKey())
    break
      default:
        break;
    }
    return '';
  }
  static Encrypt(message: Message): string {
    switch (message.messageHasher) {
      case MessageHasher.SPN16:
        if (message.messageType == MessageType.string)
          return SPN16.Messageencrypt(message.message, KeyService.getKey());
        else if (message.messageType == MessageType.file)
          return SPN16.FileEncrypt(message.message, KeyService.getKey());
        break;

      default:
        break;
    }
    return '';
  }
}
