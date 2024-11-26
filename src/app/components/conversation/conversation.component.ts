import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent {
  ticketId: number = 0;
  newMessage: string = '';

  //should be read from the server
  //call backend endpoint
  messages: {text: string, isUser: boolean}[] = [
    {text: 'Hello! How I can help you', isUser: false}
  ];

  constructor(private route: ActivatedRoute) {}
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id =params.get('id');

        if(id) {
          const parsedId = +id;
          if(!isNaN(parsedId)) {
            this.ticketId = parsedId;
          } else {
            console.error('Invalid ticket id')
          }
        }
      });
    }

    sendMessage(): void {
      if (this.newMessage.trim()) {
        //Add the user's message
        this.messages.push({ text: this.newMessage, isUser: true });
        this.newMessage = '';

        //Add a mock reply after a short delay
        setTimeout(() => {
          this.messages.push({ text: 'Thank you for your message', isUser: false });
        }, 1000);
      }
    }
  }
