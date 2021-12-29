import Message, { MessageHasher, MessageType } from './models/messageModel';
import { KeyService } from './services/key.service';
import { Component } from '@angular/core';
import { SHA256 } from './helpers/cryptHelper';
import * as Forge from 'node-forge';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}
