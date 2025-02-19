import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CreerSaeComponent} from "./creer-sae/creer-sae.component";
import {NavPrincipalComponent} from "./nav-principal/nav-principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreerSaeComponent, NavPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SaeConnect_Front';
}
