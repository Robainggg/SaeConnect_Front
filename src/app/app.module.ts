import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import du module
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './pages/soutenance/list/list.component';
import { DetailComponent } from './pages/soutenance/detail/detail.component';
import { routes } from './app.routes';
import {CreerSaeComponent} from "./pages/creer-sae/creer-sae.component";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CreerSaeComponent,
    AppComponent,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
