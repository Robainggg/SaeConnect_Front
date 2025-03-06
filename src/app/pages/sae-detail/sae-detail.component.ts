import { Component } from '@angular/core';
import {SaeService} from "../../services/sae.service";
import {ActivatedRoute} from "@angular/router";
import {SaeInterface} from "../../interfaces/sae.interface";

@Component({
  selector: 'app-sae-detail',
  standalone: true,
  imports: [],
  templateUrl: './sae-detail.component.html',
  styleUrl: './sae-detail.component.scss'
})
export class SaeDetailComponent {

  idSae!: number;

  sae!: SaeInterface;


  constructor(private saeService: SaeService, private route: ActivatedRoute) {
    this.idSae = Number(this.route.snapshot.paramMap.get('idSae'))
  }

  ngOnInit() {
    this.saeService.getSaesById(this.idSae).subscribe(data => {
      this.sae = data
    })  }
}
