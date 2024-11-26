import { Component } from '@angular/core';
import { Ticket } from '../../models';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {

  }

  ngOnInit(): void {
    this.tickets = this.ticketService.getTickets();
  }

}
