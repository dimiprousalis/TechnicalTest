import { Component } from '@angular/core';
import { Pavilion } from '../../Pavilion';
import { PavilionService } from '../../services/pavilion.service';

@Component({
  selector: 'app-pavilions',
  templateUrl: './pavilions.component.html',
  styleUrl: './pavilions.component.css'
})
export class PavilionsComponent {
  pavilions: Pavilion[] = []
  isFormVisible: boolean = false;
  editData: Pavilion | null = null; // Declare editData property
  isViewCard: boolean = true;

  constructor(private pavilionService: PavilionService) { }

  ngOnInit(): void {
    this.pavilionService.getData().subscribe((pavilions) => (this.pavilions = pavilions));
  }

  showAddNew() {
    this.isFormVisible = true
  }
  showCardView() {
    this.isViewCard = true
  }
  showGridView() {
    this.isViewCard = false
  }

  closeForm() {
    this.isFormVisible = false
    this.editData = null
  }

  addNew(pavilion: Pavilion) {
    this.pavilionService.addNew(pavilion).subscribe((pavilions) => (this.pavilions.push(pavilion)));
  }

  deleteItem(pavilion: Pavilion) {
    this.pavilionService
      .deleteItem(pavilion)
      .subscribe(
        () => (this.pavilions = this.pavilions.filter((t) => t.id !== pavilion.id))
      );
  }

  openEditItem(pavilion: Pavilion) {
    this.editData = pavilion
    this.isFormVisible = true
  }

  editItem(pavilion: Pavilion) {
    this.pavilionService
      .editItem(pavilion).subscribe();
  }
}
