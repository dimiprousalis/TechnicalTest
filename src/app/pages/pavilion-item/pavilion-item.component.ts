import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pavilion } from '../../Pavilion';

@Component({
  selector: 'app-pavilion-item',
  templateUrl: './pavilion-item.component.html',
  styleUrl: './pavilion-item.component.css'
})

export class PavilionItemComponent {
  @Output() onAddNew: EventEmitter<any> = new EventEmitter
  @Output() onEditItem: EventEmitter<any> = new EventEmitter
  @Output() onClose = new EventEmitter<void>();
  @Input() editData: Pavilion | null = null;

  id: string = ''
  name: string = ''
  image: string = 'image1.png'
  area: string = ''
  poweredBy: string = ''
  description: string = ''
  tags: string = ''

  ngOnInit() {
    if (this.editData && this.editData.id !== undefined) {
      this.id = this.editData.id;
      this.name = this.editData.name;
      this.image = this.editData.image;
      this.area = this.editData.area;
      this.poweredBy = this.editData.poweredBy;
      this.description = this.editData.description;
      this.tags = this.editData.tags;
    }
  }

  onSubmit() {
    const newData = {
      name: this.name,
      image: this.image,
      area: this.area,
      poweredBy: this.poweredBy,
      description: this.description,
      tags: this.tags
    }
    const changedData = {
      id: this.id,
      name: this.name,
      image: this.image,
      area: this.area,
      poweredBy: this.poweredBy,
      description: this.description,
      tags: this.tags
    }
    if (this.editData) {
      this.onEditItem.emit(changedData)
    }
    else {
      this.onAddNew.emit(newData)
      this.name = "",
        this.image = "",
        this.area = "",
        this.poweredBy = "",
        this.description = "",
        this.tags = ""
    }
    location.reload();
  }
}

