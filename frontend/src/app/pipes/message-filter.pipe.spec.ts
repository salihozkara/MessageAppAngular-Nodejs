import Message from '../models/messageModel';
import { MessageFilterPipe } from './message-filter.pipe';

describe('MessageFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MessageFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it("filtreleme işlemi düzgün çaılıyor mu",()=>{
    const pipe = new MessageFilterPipe();
    let messages=[]
    let equalMessages=[]
    for (let i = 0; i < 10; i++) {
      let message=new Message()
      message.receiverId=i
      message.userId=10-i
      messages.push(message)
      if(i==1||10-i==1)
      equalMessages.push(message)   
    }
    expect(pipe.transform(messages,1)).toEqual(equalMessages)
  })
});
