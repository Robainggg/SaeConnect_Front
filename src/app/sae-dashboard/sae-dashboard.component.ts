import { Component } from '@angular/core';
import {SaeService} from "../services/sae.service";
import { CommonModule } from '@angular/common';
import {RouterModule, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sae-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FormsModule],
  templateUrl: './sae-dashboard.component.html',
  styleUrl: './sae-dashboard.component.scss'
})
export class SaeDashboardComponent {

  saes : any;
  itemsPerPage = 4;
  currentPage = 1;

  searchQuery: string = '';
  filteredSaes: any[] = [];
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(private saeService: SaeService) {
    saeService.getSaes().subscribe(data => {
      this.saes = data
    });
    console.log(this.saes)
    this.filteredSaes = [...this.saes];
    this.updatePagination();
  }

  updatePagination() {
    this.filteredSaes = this.saes.filter((sae: { nom: string; sujet: string; }) =>
      sae.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      sae.sujet.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.totalPages = Math.ceil(this.filteredSaes.length / this.pageSize);
    this.goToPage(1);
  }

  get paginatedSaes() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredSaes.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onSearch() {
    console.log("je suis appelé")
    this.updatePagination();
  }


}
