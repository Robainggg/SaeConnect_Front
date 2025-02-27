import { Component } from '@angular/core';
import {RouterLink, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

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
  constructor(private router: Router, protected authService: AuthService) {
  }

  goToSaes(){
    this.router.navigate(['/saeDashboard'])
  }
}
