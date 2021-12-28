import { KeyService } from '../services/key.service';
import Message, { MessageHasher, MessageType } from './../models/messageModel';
import { SPN16 } from './cryptHelper';
import { Buffer } from "buffer"
export default class HasherHelper{
    static Decrypt(message:Message):string{
        switch (message.messageHasher) {
            case MessageHasher.SPN16:
                return SPN16.decrypt(message.message,KeyService.getKey())
                break;
        
            default:
                break;
        }
        return ""
    }
    static Encrypt(message:Message): string{
        switch (message.messageHasher) {
            case MessageHasher.SPN16:     
                return SPN16.encrypt(message.message,KeyService.getKey())
                break;
        
            default:
                break;
        }
        return ""
    }
}