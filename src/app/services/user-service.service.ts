import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = "http://localhost:8080/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }

  getUserById(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  getEtudiants(): Observable<any>{
    return this.http.get(`${this.apiUrl}/etudiants`)
  }

  getResponsables(): Observable<any>{
    return this.http.get(`${this.apiUrl}/responsables`)
  }



}
