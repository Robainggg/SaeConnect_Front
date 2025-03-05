import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import du module
import { AppComponent } from './app.component';
import { CreerSaeComponent } from './creer-sae/creer-sae.component'; // Import du composant
import { RouterModule } from '@angular/router';
import { ListComponent } from './soutenance/list/list.component';
import { DetailComponent } from './soutenance/detail/detail.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
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
  bootstrap: [ListComponent]
})
export class AppModule { }


