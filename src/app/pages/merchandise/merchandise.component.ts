import { Component } from '@angular/core';
import { MerchandiseService } from '../../services/merchandise.service';
import { Merchandise } from '../../Merchandise';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrl: './merchandise.component.css'
})
export class MerchandiseComponent {
  merchandises: Merchandise[] = []


  constructor(private merchandiseService: MerchandiseService) { }

  ngOnInit(): void {
    this.merchandiseService.getData().subscribe((merchandises) => (this.merchandises = merchandises));
  }
}
