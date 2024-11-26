import { Injectable } from '@angular/core';
import { MOCK_TICKETS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTickets() {
    return MOCK_TICKETS;
  }
}
