import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ChatComponent {
  bot: any;
  messages: any[] = [];
  newMessage = '';

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.bot = history.state.bot;
    this.loadMessages();
  }

  loadMessages() {
    this.api.getMessages().subscribe((res: any) => this.messages = res);
  }

  send() {
    if (this.newMessage.trim()) {
      this.api.sendMessage({ text: this.newMessage }).subscribe(() => {
        this.newMessage = '';
        this.loadMessages();
      });
    }
  }
}
