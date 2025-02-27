import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CreerSaeComponent} from "./pages/creer-sae/creer-sae.component";
import {NavPrincipalComponent} from "./pages/nav-principal/nav-principal.component";
import {LoginComponent} from "./pages/login/login.component";
import {MainComponent} from "./pages/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreerSaeComponent, NavPrincipalComponent, LoginComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SaeConnect_Front';
}
