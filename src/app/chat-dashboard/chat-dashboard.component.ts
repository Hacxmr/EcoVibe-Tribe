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
    
      if(userMessage === "I want to buy polyester top. what can be sustainable alternative for this?"){
        return "The alternatives to polyster top can be Linen top. Linen is famous for how light it is as a fabric and how light and airy clothes made from it are. Organic linen is ethical and sustainable because it is also made out of a plant called Flax. Its production requires very little water which also makes it a way better alternative to polyester or cotton."
      }
      else if(userMessage === "How should i wear my pink cotton shirt?") return "Here are a few stylish ways to wear your pink old cotton shirt: Pair it with a light denim jacket and white jeans for a fresh, laid-back look. Add some trendy sneakers to complete the outfit. or try Knotted Crop Top: Knot the shirt at the waist and wear it with high-waisted shorts or a skirt for a fun, summery vibe."
      else return "Sorry! didn't understand."
  }

  scrollToBottom() {
    const container = document.querySelector('.messages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
}
