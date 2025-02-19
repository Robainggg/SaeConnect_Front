import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserServiceService} from "../services/user-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {SemestreService} from "../services/semestre.service";


@Component({
  selector: 'app-creer-sae',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './creer-sae.component.html',
  standalone: true,
  styleUrl: './creer-sae.component.scss'
})
export class CreerSaeComponent implements OnInit {
  saeForm: FormGroup;
  responsables :any;
  semestres: any;

  constructor(private fb: FormBuilder, private userService: UserServiceService, private semestreService: SemestreService) {
    this.saeForm = this.fb.group({
      nom: ['', Validators.required],
      sujet: ['', Validators.required],
      responsable_id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      semestre_id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
    userService.getResponsables().subscribe(data => this.responsables = data);
    semestreService.getSemestres().subscribe(data => this.semestres = data);

    console.log("test:", this.responsables)
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
