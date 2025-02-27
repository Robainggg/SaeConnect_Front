import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Credentials} from "../../interfaces/credentials";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      alias: ['', Validators.required],
      password: ['', Validators.required]});
  }

  onSubmit(){
    console.log("Oui tu submit bien")
    if(this.loginForm.valid){
      const credentials: Credentials = this.loginForm.value;
      this.authService.login(credentials);
    }
    else {
      console.log("TON FORMULAIRE EST PAS VALIDEEEUEUUUUUUHHH")
    }
  }

}
