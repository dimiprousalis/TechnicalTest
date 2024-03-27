import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddNew: boolean = false;
  private subject = new Subject<any>()
  constructor() { }

  toggleAddNew(): void {
    this.showAddNew = true;
    this.subject.next(this.showAddNew)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
