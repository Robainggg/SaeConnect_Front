import { Component } from '@angular/core';
import {NavPrincipalComponent} from "../nav-principal/nav-principal.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
    imports: [
        NavPrincipalComponent,
        RouterOutlet
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
