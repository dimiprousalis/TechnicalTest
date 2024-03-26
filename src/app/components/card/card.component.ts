import { Component, Input } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() data: any;
  @Input() cardType: string = ""


    // Fort Awesome icons
    faEllipsisVertical = faEllipsisVertical;
}
