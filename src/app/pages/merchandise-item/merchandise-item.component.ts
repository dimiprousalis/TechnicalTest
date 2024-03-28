import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Merchandise } from '../../Merchandise';


@Component({
  selector: 'app-merchandise-item',
  templateUrl: './merchandise-item.component.html',
  styleUrl: './merchandise-item.component.css'
})
export class MerchandiseItemComponent {
  @Output() onAddNew: EventEmitter<any> = new EventEmitter
  @Output() onEditItem: EventEmitter<any> = new EventEmitter
  @Output() onClose = new EventEmitter<void>();
  @Input() editData: Merchandise | null = null;

  id: string = ''
  name: string = ''
  image: string = 'image1.png'
  description: string = ''
  homepage: boolean = false
  categoryCode: string = ''
  tag: string = ''

  ngOnInit() {
    if (this.editData && this.editData.id !== undefined) {
      this.id = this.editData.id;
      this.name = this.editData.name;
      this.image = this.editData.image;
      this.description = this.editData.description;
      this.homepage = this.editData.homepage;
      this.categoryCode = this.editData.categoryCode;
      this.tag = this.editData.tag;
    }
  }

  onSubmit() {
    const newData = {
      name: this.name,
      image: this.image,
      description: this.description,
      homepage: this.homepage,
      categoryCode: this.categoryCode,
      tag: this.tag
    }

    const changedData = {
      id: this.id,
      name: this.name,
      image: this.image,
      description: this.description,
      homepage: this.homepage,
      categoryCode: this.categoryCode,
      tag: this.tag
    }
    if (this.editData) {
      this.onEditItem.emit(changedData)
    }
    else {
      this.onAddNew.emit(newData)
    }
    
    this.name = '',
      this.image = '',
      this.description = '',
      this.homepage = false,
      this.categoryCode = '',
      this.tag = ''

    location.reload();
  }
}

