import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showHorizontalView: boolean = false;
  private showVerticalView: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleHorizontalView(): void {
    this.showHorizontalView = true;
    this.showVerticalView=false;
    this.subject.next(this.showHorizontalView);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
