import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import HasherHelper from '../helpers/hasherHelper';
import Message from '../models/messageModel';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;
  private url = 'http://localhost:3000'; // your server local path

  constructor() {
    this.socket = io(this.url, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
  }
  // sockete katılma yerini joinroom ile sağlıyoruz
  joinRoom(data: any): void {
    this.socket.emit('join', data);
  }
  // mesajın şifrelenip emitlenerek socket aracılığıyla backende gönderildiği fonksiyon
  sendMessage(message: Message): void {
    HasherHelper.Encrypt(message);
    this.socket.emit('message', message);
  }
  // socketi dinler ve mesaj gelince veriyi çeker ve decrypt eder
  getMessage(): Observable<Message> {
    return new Observable<Message>((observer) => {
      this.socket.on('new message', (data: Message) => {
        console.log(data)
        HasherHelper.Decrypt(data);
        console.log(data)
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }
}
