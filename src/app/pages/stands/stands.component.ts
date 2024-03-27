import { Component } from '@angular/core';
import { Stand } from '../../Stand';
import { StandService } from '../../services/stand.service';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrl: './stands.component.css'
})
export class StandsComponent {
  stands: Stand[] = []
  showAddNew: boolean = false;
  subscription: Subscription;

  constructor(private standService: StandService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddNew = value));
  }

  ngOnInit(): void {
    this.standService.getData().subscribe((stands) => (this.stands = stands));
  }

  toggleAddNew() {
    this.uiService.toggleAddNew();
  }

  addNew(stand: Stand) {
    this.standService.addNew(stand).subscribe((stands) => (this.stands.push(stand)));
  }
}







