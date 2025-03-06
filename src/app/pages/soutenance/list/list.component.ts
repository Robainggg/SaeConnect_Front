import { Component, OnInit } from '@angular/core';

import { SoutenanceService } from '../../../services/soutenance.service';
import { Soutenance } from '../../../interfaces/soutenance.model';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [
    RouterLink,
    NgForOf
  ]
})
export class ListComponent implements OnInit {
  soutenances: Soutenance[] = [];

  constructor(private soutenanceService: SoutenanceService) {}

  ngOnInit() {
    this.soutenances = this.soutenanceService.getSoutenances();
  }
}
