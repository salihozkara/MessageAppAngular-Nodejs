export default class Message {
  userId: number;
  roomId: number;
  message: string | any;
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
