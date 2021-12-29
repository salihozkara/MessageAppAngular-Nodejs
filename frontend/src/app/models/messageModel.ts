export default class Message {
  userId: number;
  roomId: number;
  message: FileMessage | string | any;
  messageType: MessageType;
  receiverId: number;
  messageHasher: MessageHasher;
}
export enum MessageType {
  string,
  file,
}
export enum MessageHasher {
  SPN16,
  SHA256,
}
export class FileMessage{
  fileName:string
  file:string
}
