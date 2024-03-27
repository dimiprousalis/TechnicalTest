import { Component } from '@angular/core';
import { Pavilion } from '../../Pavilion';
import { PavilionService } from '../../services/pavilion.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pavilions',
  templateUrl: './pavilions.component.html',
  styleUrl: './pavilions.component.css'
})
export class PavilionsComponent {
  pavilions: Pavilion[] = []
  showAddNew: boolean = false;
  subscription: Subscription;

  constructor(private pavilionService: PavilionService, private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddNew = value));
  }

  ngOnInit(): void {
    this.pavilionService.getData().subscribe((pavilions) => (this.pavilions = pavilions));
  }

  toggleAddNew() {
    this.uiService.toggleAddNew();
  }

  addNew(pavilion: Pavilion) {
    this.pavilionService.addNew(pavilion).subscribe((pavilions) => (this.pavilions.push(pavilion)));
  }
}
