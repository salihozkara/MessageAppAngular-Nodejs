import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { SPN16 } from './helpers/cryptHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor() {
    
  }

}
