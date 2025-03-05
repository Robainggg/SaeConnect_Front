import { Routes } from '@angular/router';
import {CreerSaeComponent} from "./creer-sae/creer-sae.component";
import {SaeDashboardComponent} from "./sae-dashboard/sae-dashboard.component";
import {AccueilComponent} from "./accueil/accueil.component";
import { ListComponent } from './soutenance/list/list.component';
import { DetailComponent } from './soutenance/detail/detail.component';

export const routes: Routes = [
  { path: '',     component: AccueilComponent },
  { path: 'saeDashboard', component: SaeDashboardComponent},
  { path: 'creerSae', component: CreerSaeComponent},
  { path: 'soutenance', component: ListComponent },
  { path: 'soutenance/:id', component: DetailComponent },
  { path: '', redirectTo: '/soutenance', pathMatch: 'full' }
];

