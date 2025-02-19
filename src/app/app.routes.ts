import { Routes } from '@angular/router';
import {CreerSaeComponent} from "./creer-sae/creer-sae.component";
import {SaeDashboardComponent} from "./sae-dashboard/sae-dashboard.component";

export const routes: Routes = [
  { path: '',     component: CreerSaeComponent },
  { path: 'saeDashboard', component: SaeDashboardComponent}
];
