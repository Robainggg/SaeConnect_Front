import { Component } from '@angular/core';
import {NavPrincipalComponent} from "../nav-principal/nav-principal.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    NavPrincipalComponent,
    RouterOutlet
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
