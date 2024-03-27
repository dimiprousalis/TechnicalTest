import { Component } from '@angular/core';
import { MerchandiseService } from '../../services/merchandise.service';
import { Merchandise } from '../../Merchandise';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrl: './merchandise.component.css'
})
export class MerchandiseComponent {
  merchandises: Merchandise[] = []
  showAddNew: boolean = false;
  subscription: Subscription;

  constructor(private merchandiseService: MerchandiseService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddNew = value));
  }

  ngOnInit(): void {
    this.merchandiseService.getData().subscribe((merchandises) => (this.merchandises = merchandises));
  }


  toggleAddNew() {
    this.uiService.toggleAddNew();
  }

  addNew(merchandise: Merchandise) {
    this.merchandiseService.addNew(merchandise).subscribe((merchandises) => (this.merchandises.push(merchandise)));
  }
}
