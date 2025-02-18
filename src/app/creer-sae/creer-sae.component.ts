import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-creer-sae',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './creer-sae.component.html',
  standalone: true,
  styleUrl: './creer-sae.component.scss'
})
export class CreerSaeComponent implements OnInit {
  saeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.saeForm = this.fb.group({
      nom: ['', Validators.required],
      sujet: ['', Validators.required],
      responsable_id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      semestre_id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.saeForm.valid) {
      console.log('Données du formulaire:', this.saeForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
