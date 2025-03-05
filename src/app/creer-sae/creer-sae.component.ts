import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserServiceService} from "../services/user-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {SemestreService} from "../services/semestre.service";
import {SaeService} from "../services/sae.service";




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

  constructor(private fb: FormBuilder, private userService: UserServiceService, private semestreService: SemestreService, private saeService: SaeService) {
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

      this.saeService.createSae(this.saeForm.value).subscribe({
        next: (data: any) => {
          console.log(data)
        },
        error : (error) => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      })
    } else {
      console.log('Formulaire invalide');
    }
  }  
}
