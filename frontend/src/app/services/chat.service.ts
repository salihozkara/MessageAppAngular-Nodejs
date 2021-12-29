import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import HasherHelper from '../helpers/hasherHelper';
import Message, { MessageType } from '../models/messageModel';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;
  private url = 'http://localhost:3000'; // your server local path
  private key = 'mysecret';

  constructor() {
    this.socket = io(this.url, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
  }

  joinRoom(data: any): void {
    this.socket.emit('join', data);
  }

  sendMessage(message: Message): void {
    message.message = HasherHelper.Encrypt(message);
    this.socket.emit('message', message);
  }

  getMessage(): Observable<Message> {
    return new Observable<Message>((observer) => {
      this.socket.on('new message', (data: Message) => {
        data.message = HasherHelper.Decrypt(data);

        console.log(data);
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }
}
