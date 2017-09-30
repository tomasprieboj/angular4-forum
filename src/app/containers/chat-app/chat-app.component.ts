import { MainPageComponent } from './../main-page/main-page.component';
import { WebsocketService } from 'app/services/remote-communication-services/websocket.service';
import { ChatService } from 'app/services/remote-communication-services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss'],
  providers: [ ChatService, WebsocketService ]
})
export class ChatAppComponent implements OnInit {
  private message = {
    author: 'tutorialedge',
    message: 'this is a test message'
  }

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log(`Response from websocket: ${msg}`);
    });
  }

  ngOnInit() {

    setInterval(() => {
      this.sendMsg();
    }, 2000)
  }


  sendMsg() {
    // console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
    // this.message.message = '';
  }
}
