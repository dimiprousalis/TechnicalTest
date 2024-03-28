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
  isFormVisible: boolean=false;
  editData: Merchandise | null = null; 

  constructor(private merchandiseService: MerchandiseService) {}

  ngOnInit(): void {
    this.merchandiseService.getData().subscribe((merchandises) => (this.merchandises = merchandises));
  }

  showAddNew() {
    this.isFormVisible = true
  }

  closeForm() {
    this.isFormVisible = false
    this.editData= null
  }

  addNew(merchandise: Merchandise) {
    this.merchandiseService.addNew(merchandise).subscribe((merchandises) => (this.merchandises.push(merchandise)));
  }

  deleteItem(merchandise: Merchandise) {
    this.merchandiseService
      .deleteItem(merchandise)
      .subscribe(
        () => (this.merchandises = this.merchandises.filter((t) => t.id !== merchandise.id))
      );
  }

  openEditItem(merchandise: Merchandise) {
    this.editData = merchandise
    this.isFormVisible = true
  }

  editItem(merchandise: Merchandise) {
    this.merchandiseService
      .editItem(merchandise).subscribe();
  }
}
