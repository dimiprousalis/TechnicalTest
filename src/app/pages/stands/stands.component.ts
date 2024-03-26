import { Component } from '@angular/core';
import { Stand } from '../../Stand';
import { StandService } from '../../services/stand.service';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrl: './stands.component.css'
})
export class StandsComponent {
  stands: Stand[] = []


  constructor(private standService: StandService) { }

  ngOnInit(): void {
    this.standService.getData().subscribe((stands) => (this.stands = stands));
  }
}
