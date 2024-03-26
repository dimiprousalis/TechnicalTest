import { Component } from '@angular/core';
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


  constructor() {}

  ngOnInit(): void {}




}
