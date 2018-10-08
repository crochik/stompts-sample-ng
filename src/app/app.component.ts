import { Component, OnInit } from '@angular/core';
import { MessageQueueService } from './message-queue.service';
import * as stomp from 'stompts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  frames: stomp.Frame[] = [];
  title = 'app';

  constructor(private messageQueue: MessageQueueService) { }

  ngOnInit() {
    this.subscribeAsync();
  }

  async subscribeAsync() {
    const subscription = await this.messageQueue.subscribe('/topic/test.#', this.onMessage.bind(this));
    console.log(`Subscribed: ${subscription.id}`);
  }

  onMessage(frame: stomp.Frame) {
    this.frames.push(frame);
  }
}
