import { Component } from '@angular/core';
import { Sector } from '../../Sector';
import { SectorService } from '../../services/sector.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent {
  sectors: Sector[] = []
  isFormVisible: boolean = false;
  editData: Sector | null = null; // Declare editData property
  isViewCard: boolean = true;

  constructor(private sectorService: SectorService) { }

  ngOnInit(): void {
    this.sectorService.getData().subscribe((sectors) => (this.sectors = sectors));
  }

  showAddNew() {
    this.isFormVisible = true
  }

  showCardView() {
    this.isViewCard = true
  }
  showGridView() {
    this.isViewCard = false
  }

  closeForm() {
    this.isFormVisible = false
    this.editData = null
  }

  addNew(sector: Sector) {
    this.sectorService.addNew(sector).subscribe((sectors) => (this.sectors.push(sector)));
  }

  deleteItem(sector: Sector) {
    this.sectorService
      .deleteItem(sector)
      .subscribe(
        () => (this.sectors = this.sectors.filter((t) => t.id !== sector.id))
      );
  }

  openEditItem(sector: Sector) {
    this.editData = sector
    this.isFormVisible = true
  }

  editItem(sector: Sector) {
    this.sectorService
      .editItem(sector).subscribe();


  }
}
