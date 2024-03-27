import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-stand-item',
  templateUrl: './stand-item.component.html',
  styleUrl: './stand-item.component.css'
})
export class StandItemComponent {
  showAddNew: boolean = false;
  subscription: Subscription = new Subscription
  @Output() onAddNew: EventEmitter<any> = new EventEmitter


  name: string = ''
  pavilion: string = ''
  image: string = 'image1.png'
  sector: string = ''
  dimensions: string = ''
  floor: string = ''
  notes: string = ''
  long1: number | null = null;
  long2: number | null = null;
  lat1: number | null = null;
  lat2: number | null = null;

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
      pavilion: this.pavilion,
      image: this.image,
      sector: this.sector,
      dimensions: this.dimensions,
      floor: this.floor,
      notes: this.notes,
      long1: this.long1,
      long2: this.long2,
      lat1: this.lat1,
      lat2: this.lat2
    }

    this.onAddNew.emit(newData)

    this.name = '',
      this.pavilion = '',
      this.image = '',
      this.sector = '',
      this.dimensions = '',
      this.floor = '',
      this.notes = '',
      this.long1 = 0,
      this.long2 = 0,
      this.lat1 = 0,
      this.lat2 = 0

    this.showAddNew = false
  }

  onCloseClick() {
    this.showAddNew = false; // Set showAddNew to false when close button is clicked
  }

}
