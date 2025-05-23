import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../service/authentication.service';

@Component({
  selector: 'app-login.page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.page.component.html',
  styleUrl: './login.page.component.css'
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  isLoading: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  async login() {
    if (!this.username || !this.password) {
      this.loginError = true;
      return;
    }

    this.isLoading = true;
    this.loginError = false;

    try {
      const success = await this.authService.login(this.username, this.password);
      if (success) {
        this.router.navigate(['/app']);
      } else {
        this.loginError = true;
      }
    } catch (error) {
      this.loginError = true;
      console.error('Login error:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
