import { users } from './../data/users';
import { TestBed } from '@angular/core/testing';
import Message, { MessageHasher, MessageType } from '../models/messageModel';
import { UserService } from '../services/user.service';
import HasherHelper from './hasherHelper';
describe('CompressHelper', () => {
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      UserService.currentUser=users[0]
    });
    it("spn 16 mesaj decrypt and encrypt",()=>{
        let testString="merhaba bu bir test mesajı"
        let m=new Message()
        m.message=testString
        m.messageHasher=MessageHasher.SPN16
        m.messageType=MessageType.string
        HasherHelper.Encrypt(m)
        HasherHelper.Decrypt(m)
        expect(m.message).toEqual(testString)
    })
    it("spn 16 dosya decrypt and encrypt",()=>{
        let file="merhaba bu bir base64 file simulasyon stringidir"
        let fileName="bu bir test file ismidir"
        let m=new Message()
        m.message={file:file,fileName:fileName}
        m.messageHasher=MessageHasher.SPN16
        m.messageType=MessageType.file
        HasherHelper.Encrypt(m)
        HasherHelper.Decrypt(m)
        expect(m.message).toEqual({file:file,fileName:fileName})
    })
    it("sha256 mesaj decrypt and encrypt",()=>{
        let testString="merhaba bu bir test mesajı"
        let m=new Message()
        m.message=testString
        m.messageHasher=MessageHasher.SHA256
        m.messageType=MessageType.string
        m.receiverId=1
        m.userId=2
        HasherHelper.Encrypt(m)
        HasherHelper.Decrypt(m)
        expect(m.message).toEqual(testString)
    })
    it("sha256 dosya decrypt and encrypt",()=>{
        let file="merhaba bu bir base64 file simulasyon stringidir"
        let fileName="bu bir test file ismidir"
        let m=new Message()
        let obje={file:file,fileName:fileName}
        m.message=obje
        m.messageHasher=MessageHasher.SHA256
        m.messageType=MessageType.file
        m.receiverId=1
        m.userId=2
        HasherHelper.Encrypt(m)
        HasherHelper.Decrypt(m)
        expect(m.message).toEqual(obje)
    })
  });