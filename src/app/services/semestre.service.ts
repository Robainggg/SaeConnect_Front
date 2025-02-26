import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  private apiUrl = "http://localhost:8080/semesters"

  constructor(private http: HttpClient) { }

  getSemestres(): Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }
}
