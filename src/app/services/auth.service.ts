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

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: Credentials) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('firstname', response.firstname);
        localStorage.setItem('lastname', response.lastname);
        localStorage.setItem('roleId', String(response.roleId));
        this.redirectUser(response.roleId);
      })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
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
