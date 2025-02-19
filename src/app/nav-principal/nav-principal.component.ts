import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-principal',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-principal.component.html',
  styleUrl: './nav-principal.component.scss'
})
export class NavPrincipalComponent {

}
