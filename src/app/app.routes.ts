import { Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { LoginComponent } from './components/login/login.component';
import { ConversationComponent } from './components/conversation/conversation.component';


export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'customers/tickets', component: TicketListComponent},  
    {path: 'customers/tickets/:id', component: ConversationComponent}     
    
];

