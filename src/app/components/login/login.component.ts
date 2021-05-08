import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.loginForm = this.fb.group({
      name: [''],
      code: ['']
    })
  }

  ngOnInit(): void {

  }

  login() {
    this.authService.login(this.loginForm.value)
  }
  @Input() error: string | null;

}
