import { UserService } from 'src/app/services/user.service';
import { KeyService } from '../services/key.service';
import Message, { MessageHasher, MessageType } from './../models/messageModel';
import { SHA256, SPN16 } from './cryptHelper';
export default class HasherHelper {
  static Decrypt(message: Message): Message {
    switch (message.messageHasher) {
      case MessageHasher.SPN16:
        if (message.messageType == MessageType.string)
          message.message = SPN16.Messagedecrypt(
            message.message,
            KeyService.getKey()
          );
        else if (message.messageType == MessageType.file)
          message.message.file = SPN16.FileDecrypt(
            message.message,
            KeyService.getKey()
          );
        break;
      case MessageHasher.SHA256:
        if (message.messageType == MessageType.string)
          message.message = SHA256.decrypt(
            message.message,
            UserService.currentUser.privatekeypem
          );
        else if (message.messageType == MessageType.file)
          message.message.file = SHA256.decrypt(
            message.message.file,
            UserService.currentUser.privatekeypem
          );
        break;
      default:
        break;
    }
    return message;
  }
  static Encrypt(message: Message): Message {
    switch (message.messageHasher) {
      case MessageHasher.SPN16:
        if (message.messageType == MessageType.string)
          message.message = SPN16.Messageencrypt(
            message.message,
            KeyService.getKey()
          );
        else if (message.messageType == MessageType.file)
          message.message.file = SPN16.FileEncrypt(
            message.message,
            KeyService.getKey()
          );
        break;
      case MessageHasher.SHA256:
        if (message.messageType == MessageType.string)
          message.message = SHA256.encrypt(
            message.message,
            UserService.GetUserPublicKey(message.receiverId)
          );
        else if (message.messageType == MessageType.file)
          message.message.file = SHA256.encrypt(
            message.message.file,
            UserService.GetUserPublicKey(message.receiverId)
          );
        break;
      default:
        break;
    }
    return message;
  }
}
