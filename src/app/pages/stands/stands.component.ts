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
  isFormVisible: boolean=false;
  editData: Stand | null = null;

  constructor(private standService: StandService) {}

  ngOnInit(): void {
    this.standService.getData().subscribe((stands) => (this.stands = stands));
  }

  showAddNew() {
    this.isFormVisible = true
  }

  closeForm() {
    this.isFormVisible = false
    this.editData= null
  }

  addNew(stand: Stand) {
    this.standService.addNew(stand).subscribe((stands) => (this.stands.push(stand)));
  }

  deleteItem(stand: Stand) {
    this.standService
      .deleteItem(stand)
      .subscribe(
        () => (this.stands = this.stands.filter((t) => t.id !== stand.id))
      );
  }

  openEditItem(stand: Stand) {
    this.editData = stand
    this.isFormVisible = true
  }

  editItem(stand: Stand) {
    this.standService
      .editItem(stand).subscribe();
  }
}







