import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  ) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error);
      }
    });
}
}