import { Injectable } from '@angular/core';
import { Soutenance } from './soutenance.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoutenanceService {
  private soutenances: Soutenance[] = [
    { id: 1, titre: 'Soutenance Angular', date: '2025-03-10', heure: '10:00', lieu: 'Salle 101', sae: 'Développement Web' },
    { id: 2, titre: 'Soutenance IA', date: '2025-03-12', heure: '14:00', lieu: 'Salle 202', sae: 'Machine Learning' },
  ];

  getSoutenances(): Observable<Soutenance[]> {
    return of(this.soutenances);
  }

  getSoutenanceById(id: number): Observable<Soutenance | undefined> {
    return of(this.soutenances.find(s => s.id === id));
  }
}
