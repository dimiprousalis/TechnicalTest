import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() data: any;
  @Input() cardType: string = ""
  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter() 
  @Output() onOpenEditItem: EventEmitter<any> = new EventEmitter() 

    // Fort Awesome icons
    faTrashCan = faTrashCan;
    faPencil = faPencil;

    onDelete(data: any) {
      this.onDeleteItem.emit(data) // Emitting the delete event to the parent component
    }

    onOpenEditor(data: any) {
      this.onOpenEditItem.emit(data)
    }
}
