import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaeService {

  private apiUrl = "http://localhost:8080/saes"

  constructor(private http: HttpClient) { }

  getSaes(): Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }

  createSae(body: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`, body)
  }
}
