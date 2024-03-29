import { Component, EventEmitter, Output } from '@angular/core';
import { faArrowDownAZ, faArrowUpAZ, faBars, faGrip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-display-bar',
  templateUrl: './display-bar.component.html',
  styleUrl: './display-bar.component.css'
})
export class DisplayBarComponent {
  // Fort Awesome icons
  faGrip = faGrip;
  faBars = faBars;
  faArrowUpAZ = faArrowUpAZ;
  faArrowDownAZ = faArrowDownAZ;
  
  isBarsClicked: boolean = false; 
  isCardsClicked: boolean = true;


  @Output() cardsClick = new EventEmitter // Output event emitter for button click events
  @Output() barsClick = new EventEmitter // Output event emitter for button click events

  constructor() {}

  ngOnInit(): void {}

  onClickBars() {
    this.isCardsClicked = false;
    this.isBarsClicked = true;
    this.barsClick.emit(); // Emitting the click event to the parent component 
  }
  onClickCards() {
    this.isCardsClicked = true;
    this.isBarsClicked = false;
    this.cardsClick.emit(); // Emitting the click event to the parent component

  }
}
