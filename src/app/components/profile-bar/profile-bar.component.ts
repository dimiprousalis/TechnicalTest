import { Component, EventEmitter, Output } from '@angular/core';
import { faFile, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrl: './profile-bar.component.css'
})
export class ProfileBarComponent {
  // Fort Awesome icons
  faUser = faUser;
  faFile = faFile;
  faBorderAll = faBorderAll;

}
