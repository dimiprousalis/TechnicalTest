import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stand } from '../../Stand';


@Component({
  selector: 'app-stand-item',
  templateUrl: './stand-item.component.html',
  styleUrl: './stand-item.component.css'
})
export class StandItemComponent {
  @Output() onAddNew: EventEmitter<any> = new EventEmitter
  @Output() onEditItem: EventEmitter<any> = new EventEmitter
  @Output() onClose = new EventEmitter<void>();
  @Input() editData: Stand | null = null;

  id: string = ''
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

  ngOnInit() {
    if (this.editData && this.editData.id !== undefined) {
      this.id = this.editData.id,
        this.name = this.editData.name,
        this.pavilion = this.editData.pavilion,
        this.image = this.editData.image,
        this.sector = this.editData.sector,
        this.dimensions = this.editData.dimensions,
        this.floor = this.editData.floor,
        this.notes = this.editData.notes,
        this.long1 = this.editData.long1,
        this.long2 = this.editData.long2,
        this.lat1 = this.editData.lat1,
        this.lat2 = this.editData.lat2
    }
  }

  onSubmit() {

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
    const changedData = {
      id: this.id,
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
    if (this.editData) {
      this.onEditItem.emit(changedData)
    }
    else {
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
    }
    location.reload();
  }

}
