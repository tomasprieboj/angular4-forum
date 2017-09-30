import { Message } from './chat.service';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable()
export class WebsocketService {

  private subject: Subject<MessageEvent>;

  constructor() { }

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }

    return this.subject;
  }

  // http://jmesnil.net/stomp-websocket/doc/
  private create(url): Subject<MessageEvent> {
    // const ws = new WebSocket(url);
    const socket = new SockJS(url);
    const stompClient = Stomp.over(socket);

    const observable = Observable.create( (obs: Observer<MessageEvent>) => {
      stompClient.connect({}, (data: any) => {

        console.log('Connected to websocket');

        stompClient.subscribe('/topic/message', (message: any) => {
          console.log('data from server', JSON.parse(message.body));
        });

      });
    })

    const observer = {
      next: (data: any) => {
        console.log(socket.readyState, WebSocket.OPEN);
        if (socket.readyState === WebSocket.OPEN) {
          // socket.send('/topic/message', JSON.stringify(data));
          stompClient.send('/app/chat-message', {}, JSON.stringify(data));
        }
      }
    }

    return Subject.create(observer, observable);
  }

}
