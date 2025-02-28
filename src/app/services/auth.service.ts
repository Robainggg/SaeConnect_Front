import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Credentials} from "../interfaces/credentials";
import {LoginResponse} from "../interfaces/login-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "http://localhost:8080/auth";

  constructor(private http: HttpClient, private router: Router) {
    const expirationToken = localStorage.getItem('expiration_token')
    if (expirationToken) {
      this.planAutoLogout(parseInt(expirationToken, 10))
    }
  }

  login(credentials: Credentials) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
      .subscribe(response => {
        const expirationToken = Date.now() + response.expires_in
        localStorage.setItem('userId', String(response.userId))
        localStorage.setItem('alias', response.alias)
        localStorage.setItem('token', response.token);
        localStorage.setItem('firstname', response.firstname);
        localStorage.setItem('lastname', response.lastname);
        localStorage.setItem('roleId', String(response.roleId));
        localStorage.setItem('expiration_token', expirationToken.toString())

        this.planAutoLogout(expirationToken);
        this.redirectUser(response.roleId);
      })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  private planAutoLogout(expirationToken: number) {
    const tempsRestant = expirationToken - Date.now();
    console.log(`Vous serez déconnectés dans ${tempsRestant / 1000} secondes`)
    setTimeout(() => {
      this.logout()
    }, tempsRestant)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private redirectUser(role: number) {
    switch(role) {
      case 3:
        this.router.navigate(['/accueil/admin']);
        break;
      case 2:
        this.router.navigate(['/accueil/respo']);
        break;
      case 1:
        this.router.navigate(['/accueil/etud']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }
}
