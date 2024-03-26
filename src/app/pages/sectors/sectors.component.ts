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


  constructor(private sectorService: SectorService) { }

  ngOnInit(): void {
    this.sectorService.getData().subscribe((sectors) => (this.sectors = sectors));
  }
}
