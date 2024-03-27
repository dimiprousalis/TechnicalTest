import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-merchandise-item',
  templateUrl: './merchandise-item.component.html',
  styleUrl: './merchandise-item.component.css'
})
export class MerchandiseItemComponent {
  showAddNew: boolean = false;
  subscription: Subscription = new Subscription
  @Output() onAddNew: EventEmitter<any> = new EventEmitter

  name: string = ''
  image: string = 'image1.png'
  description: string = ''
  homepage: boolean = false
  categoryCode: string= ''
  tag: string=''


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
      description: this.description,
      homepage: this.homepage,
      categoryCode: this.categoryCode,
      tag: this.tag
    }

    this.onAddNew.emit(newData)

    this.name = '',
      this.image = '',
      this.description = '',
      this.homepage = false,
      this.categoryCode='',
      this.tag=''

      this.showAddNew = false
  }

  onCloseClick() {
    this.showAddNew = false; // Set showAddNew to false when close button is clicked
  }

}