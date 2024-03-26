import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Merchandise } from '../Merchandise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  private apiUrl = 'http://localhost:5000/merchandise'; 

  constructor(private http: HttpClient) { }


  getData(): Observable<Merchandise[]> {
    return this.http.get<Merchandise[]>(this.apiUrl);
  }
}
