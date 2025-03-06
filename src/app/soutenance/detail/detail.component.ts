import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoutenanceService } from '../soutenance.service';
import { Soutenance } from '../soutenance.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  soutenance: any;

  constructor(private route: ActivatedRoute, private soutenanceService: SoutenanceService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.soutenanceService.getSoutenanceById(id).subscribe(data => this.soutenance = data);
  }
}

