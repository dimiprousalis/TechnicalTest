import { Component } from '@angular/core';
import { Pavilion } from '../../Pavilion';
import { PavilionService } from '../../services/pavilion.service';

@Component({
  selector: 'app-pavilions',
  templateUrl: './pavilions.component.html',
  styleUrl: './pavilions.component.css'
})
export class PavilionsComponent {
  pavilions: Pavilion[] = []


  constructor(private pavilionService: PavilionService) { }

  ngOnInit(): void {
    this.pavilionService.getData().subscribe((pavilions) => (this.pavilions = pavilions));
  }


}
