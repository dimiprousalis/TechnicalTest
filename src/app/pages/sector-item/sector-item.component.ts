import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-sector-item',
  templateUrl: './sector-item.component.html',
  styleUrl: './sector-item.component.css'
})
export class SectorItemComponent {
  showAddNew: boolean = false;
  subscription: Subscription = new Subscription
  @Output() onAddNew: EventEmitter<any> = new EventEmitter

  name: string = ''
  image: string = 'image1.png'
  associatedStands: string = ''
  status: string = ''
  description: string = ''
  tags: string = ''
  lastEdit: string = ''

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddNew = value));
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a name!')
      return
    }

    const newData = {
      name: this.name,
      image: this.image,
      associatedStands: this.associatedStands,
      status: this.status,
      description: this.description,
      tags: this.tags,
      lastEdit: this.lastEdit
    }

    this.onAddNew.emit(newData)

    this.name = '',
      this.image = '',
      this.associatedStands = '',
      this.status = '',
      this.description = '',
      this.tags = '',
      this.lastEdit = ''

      this.showAddNew = false
  }

  onCloseClick() {
    this.showAddNew = false; // Set showAddNew to false when close button is clicked
  }

}