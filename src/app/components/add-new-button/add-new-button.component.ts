import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-button',
  templateUrl: './add-new-button.component.html',
  styleUrl: './add-new-button.component.css'
})
export class AddNewButtonComponent {

  @Output() btnClick = new EventEmitter // Output event emitter for button click events

  constructor() { }

  ngOnInit(): void { }

  // Function called when the button is clicked
  onClick() {
    this.btnClick.emit(); // Emitting the click event to the parent component

    
  }
}
