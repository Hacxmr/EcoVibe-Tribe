import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.scss']
})
export class ChatDashboardComponent {
  userInput: string = '';
  messages : any =  [];

  sendMessage() {
    if (this.userInput.trim()) {
      const userMessage = this.userInput;
      const botMessage = this.getBotResponse(userMessage);

      this.messages.push({ user: userMessage, bot: botMessage });
      this.userInput = ''; // Clear input field
      this.scrollToBottom();
    }
  }

  getBotResponse(userMessage: string): string {
    // Placeholder for bot response logic
    return `You said: ${userMessage}`;
  }

  scrollToBottom() {
    const container = document.querySelector('.messages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
}
