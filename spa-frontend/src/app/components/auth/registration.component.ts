import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
   templateUrl: './registration.component.html'
})

export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  password_confirmation = '';

  errors: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.errors = {};

    this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    }).subscribe({
      next: res => {
        console.log('Registered:', res);
        this.router.navigate(['/login']);
      },
      error: err => {
        if (err.status === 422) {
          this.errors = err.error.errors;
        } else {
          console.error(err);
        }
      }
    });
  }
}
