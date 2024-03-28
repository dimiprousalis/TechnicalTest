import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sector } from '../../Sector';

@Component({
  selector: 'app-sector-item',
  templateUrl: './sector-item.component.html',
  styleUrl: './sector-item.component.css'
})
export class SectorItemComponent {
  @Output() onAddNew: EventEmitter<any> = new EventEmitter
  @Output() onEditItem: EventEmitter<any> = new EventEmitter
  @Output() onClose = new EventEmitter<void>();
  @Input() editData: Sector | null = null;

  id: string = ''
  name: string = ''
  image: string = 'image1.png'
  associatedStands: string = '02'
  status: string = ''
  description: string = ''
  tags: string = ''
  lastEdit: string = ''

  ngOnInit() {
    if (this.editData && this.editData.id !== undefined) {
      this.id = this.editData.id;
      this.name = this.editData.name;
      this.image = this.editData.image;
      this.associatedStands = this.editData.associatedStands;
      this.status = this.editData.status;
      this.description = this.editData.description;
      this.tags = this.editData.tags;
      this.lastEdit = this.editData.lastEdit;
    }
  }

  onSubmit() {

    const newData = {
      name: this.name,
      image: this.image,
      associatedStands: this.associatedStands,
      status: this.status,
      description: this.description,
      tags: this.tags,
      lastEdit: this.lastEdit
    }

    const changedData = {
      id: this.id,
      name: this.name,
      image: this.image,
      associatedStands: this.associatedStands,
      status: this.status,
      description: this.description,
      tags: this.tags,
      lastEdit: this.lastEdit
    }
    if (this.editData) {
      console.log('called edit')
      this.onEditItem.emit(changedData)
    }
    else {
      this.onAddNew.emit(newData)

      this.name = '',
        this.image = '',
        this.associatedStands = '',
        this.status = '',
        this.description = '',
        this.tags = '',
        this.lastEdit = ''

    }
    location.reload();
  }
}