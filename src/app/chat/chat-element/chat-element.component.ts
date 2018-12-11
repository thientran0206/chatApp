import { Component, OnInit,Input } from '@angular/core';
import {Message} from '../chat/models/message';
import { from } from 'rxjs';
@Component({
  selector: 'app-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.scss']
})
export class ChatElementComponent implements OnInit {
  @Input() public message: Message
  constructor() { }

  ngOnInit() {
  }

}
