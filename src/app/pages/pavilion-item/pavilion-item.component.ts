import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-pavilion-item',
  templateUrl: './pavilion-item.component.html',
  styleUrl: './pavilion-item.component.css'
})
export class PavilionItemComponent {

  showAddNew: boolean = false;
  subscription: Subscription = new Subscription
  @Output() onAddNew: EventEmitter<any> = new EventEmitter

  
  name: string = ''
  image: string = 'image1.png'
  area: string = ''
  poweredBy: string = ''
  description: string = ''
  tags: string = ''
  

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
      area: this.area,
      poweredBy: this.poweredBy,
      description: this.description,
      tags: this.tags
    }

    this.onAddNew.emit(newData)

    this.name = "",
      this.image = "",
      this.area = "",
      this.poweredBy = "",
      this.description = "",
      this.tags = ""

      this.showAddNew = false
  }

  onCloseClick() {
    this.showAddNew = false; // Set showAddNew to false when close button is clicked
  }

}

