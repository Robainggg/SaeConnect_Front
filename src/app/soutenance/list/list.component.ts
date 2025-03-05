import { Component, OnInit } from '@angular/core';

import { SoutenanceService } from '../soutenance.service';
import { Soutenance } from '../soutenance.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  soutenances: Soutenance[] = [];

  constructor(private soutenanceService: SoutenanceService) {}

  ngOnInit() {
    this.soutenanceService.getSoutenances().subscribe(data => this.soutenances = data);
  }
}
