import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import du module
import { AppComponent } from './app.component';
import { CreerSaeComponent } from './creer-sae/creer-sae.component'; // Import du composant

@NgModule({
  declarations: [
    AppComponent,
    CreerSaeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
