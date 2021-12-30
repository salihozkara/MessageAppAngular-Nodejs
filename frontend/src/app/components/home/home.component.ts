import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import Message, {
  MessageType,
} from 'src/app/models/messageModel';
import User from 'src/app/models/userModel';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('popup', { static: false }) popup: any;
  constructor(
    private modalService: NgbModal,
    private chatService: ChatService,
    private userService: UserService
  ) {}
  public roomId: string;
  public messageText: string;
  public messageArray: Message[] = [];
  public fileToUpload: File | null = null;
  public showScreen = false;
  public phone: string;
  public currentUser: User;
  public selectedUser: User;
  public selectedEncryptType: number=1;
  public userList: User[];
  fileName: string;
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.send(
          { fileName: file.name, file: reader.result },
          MessageType.file
        );
      };
    }
  }
  download(file: any) {
    saveAs(file.file, file.fileName);
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((u) => {
      this.userList = u;
    });
  }

  ngAfterViewInit(): void {
    this.openPopup(this.popup);
  }

  openPopup(content: any): void {
    this.modalService.open(content, { backdrop: 'static', centered: true });
  }

  login(dismiss: any): void {
    this.currentUser = this.userList.find(
      (user) => user.id.toString() == this.phone
    );
    UserService.currentUser = this.currentUser;
    this.userList = this.userList.filter(
      (user) => user.id.toString() != this.phone
    );

    if (this.currentUser) {
      this.showScreen = true;
      dismiss();
      this.join(this.currentUser.id, this.roomId);
      this.chatService.getMessage().subscribe((data: Message) => {
        setTimeout(() => {
          this.messageAdd(data);
        }, 500);
      });
    }
  }
  private messageAdd(data: Message) {
    let message = Object.assign({}, data);
    this.messageArray.push(message);
    let temp = this.messageArray;
    this.messageArray = [];
    temp.forEach((m) => this.messageArray.push(m));
  }

  getRoomId(id: number, receiverId: number): string {
    let id1: number = receiverId;
    let id2: Number = id;
    if (id < receiverId) {
      id1 = id;
      id2 = receiverId;
    }
    return `roomPrivate-${id1}-${id2}`;
  }
  selectUserHandler(id: number): void {
    this.selectedUser = this.userList.find((user) => user.id === id);
    this.roomId = this.getRoomId(this.currentUser.id, this.selectedUser.id);
  }

  join(userId: number, roomId: string): void {
    this.chatService.joinRoom({ user: userId, room: roomId });
  }

  sendMessage(): void {
    this.send(this.messageText, MessageType.string);
    this.messageText = '';
  }
  send(message: any, type: MessageType) {
    let m = new Message();
    m.userId = this.currentUser.id;
    m.receiverId = this.selectedUser.id;
    m.message = message;
    m.messageType = type;
    m.messageHasher = Number(this.selectedEncryptType);
    this.messageAdd(m);
    this.chatService.sendMessage(m);
  }
}
