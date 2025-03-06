import { Routes } from '@angular/router';
import {CreerSaeComponent} from "./pages/creer-sae/creer-sae.component";
import {SaeDashboardComponent} from "./pages/sae-dashboard/sae-dashboard.component";
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {LoginComponent} from "./pages/login/login.component";
import {AdminDashboardComponent} from "./pages/admin-dashboard/admin-dashboard.component";
import {RespoDashboardComponent} from "./pages/respo-dashboard/respo-dashboard.component";
import {EtudDashboardComponent} from "./pages/etud-dashboard/etud-dashboard.component";
import {RoleGuard} from "./guard/role.guard";
import {AuthGuard} from "./guard/auth.guard";
import {SaeDetailComponent} from "./pages/sae-detail/sae-detail.component";
import { ListComponent } from './pages/soutenance/list/list.component';
import { DetailComponent } from './pages/soutenance/detail/detail.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login',     component: LoginComponent },
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard],
  children: [
    {path: 'admin', component: AdminDashboardComponent, canActivate: [RoleGuard], data: {rolesAutorises:['3']}},
    {path: 'respo', component: RespoDashboardComponent, canActivate: [RoleGuard], data: {rolesAutorises:['2']}},
    {path: 'etud', component: EtudDashboardComponent, canActivate: [RoleGuard], data: {rolesAutorises:['1']}},
    { path: 'saeDashboard', component: SaeDashboardComponent, canActivate: [RoleGuard], data:{rolesAutorises: ['3']}},
    { path: 'creerSae', component: CreerSaeComponent, canActivate: [RoleGuard], data:{rolesAutorises: ['2', '3']}},
    {path: 'detailSae/:idSae', component: SaeDetailComponent},
    { path: 'soutenance', component: ListComponent },
    { path: 'soutenance/:id', component: DetailComponent },
  ]},
  {path: '**', redirectTo: 'login'},

];
