import { Pipe, PipeTransform } from '@angular/core';
import Message from '../models/messageModel';

@Pipe({
  name: 'messageFilter',
})
export class MessageFilterPipe implements PipeTransform {
  transform(value: Message[], selectedUserId: number): Message[] {
    return value.filter(
      (m) => m.receiverId == selectedUserId || m.userId == selectedUserId
    );
  }
}
