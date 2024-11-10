import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from 'express'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService, private router: Router
  ){}

}
