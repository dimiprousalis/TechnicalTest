import { Component } from '@angular/core';
import { Sector } from '../../Sector';
import { SectorService } from '../../services/sector.service';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent {
  sectors: Sector[] = []


 
  showAddNew: boolean = false;
  subscription: Subscription;

  constructor(private sectorService: SectorService, private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddNew = value));
  }


  ngOnInit(): void {
    this.sectorService.getData().subscribe((sectors) => (this.sectors = sectors));
  }

  toggleAddNew() {
    this.uiService.toggleAddNew();
  }

  addNew(sector: Sector) {
    this.sectorService.addNew(sector).subscribe((sectors) => (this.sectors.push(sector)));
  }
}
