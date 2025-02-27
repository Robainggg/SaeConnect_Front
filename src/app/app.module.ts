import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import du module
import { AppComponent } from './app.component';
import { CreerSaeComponent } from './pages/creer-sae/creer-sae.component'; // Import du composant

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CreerSaeComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
