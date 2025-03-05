import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { CreerSaeComponent } from './creer-sae/creer-sae.component'; 

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
