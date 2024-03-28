import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private authService: AuthService, private toastr:ToastrService) { }

  onDelete(data: any) {
    if (this.authService.getrole() === "Admin") {
      this.onDeleteItem.emit(data) // Emitting the delete event to the parent component
    } else {
      this.toastr.warning("You don't have access to delete")
    }
  }

  onOpenEditor(data: any) {
    this.onOpenEditItem.emit(data)
  }
}
