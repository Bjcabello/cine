import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, NgIf],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.password === 'admin') {
      this.error = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.error = true;
    }
  }
}
