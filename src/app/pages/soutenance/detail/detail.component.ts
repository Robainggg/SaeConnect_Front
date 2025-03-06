import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SoutenanceService } from '../../../services/soutenance.service';
import { Soutenance } from '../../../interfaces/soutenance.model';
import {RouterModule, RouterLink} from "@angular/router";


@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  imports: [
    RouterLink
  ]
})
export class DetailComponent implements OnInit {
  soutenance: any;

  constructor(private route: ActivatedRoute, private soutenanceService: SoutenanceService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.soutenance = this.soutenanceService.getSoutenanceById(id);
  }
}

