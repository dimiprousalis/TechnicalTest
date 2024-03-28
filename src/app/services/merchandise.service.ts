import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Merchandise } from '../Merchandise';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  private apiUrl = 'http://localhost:5000/merchandise';

  constructor(private http: HttpClient) { }


  getData(): Observable<Merchandise[]> {
    return this.http.get<Merchandise[]>(this.apiUrl);
  }

  addNew(merchandise: Merchandise): Observable<Merchandise> {
    return this.http.post<Merchandise>(this.apiUrl, merchandise, httpOptions)
  }

  deleteItem(merchandise: Merchandise): Observable<Merchandise> {
    const url = `${this.apiUrl}/${merchandise.id}`; 
    return this.http.delete<Merchandise>(url);
  }

  editItem(merchandise: Merchandise): Observable<Merchandise> {
    const url = `${this.apiUrl}/${merchandise.id}`; 
    return this.http.put<Merchandise>(url, merchandise, httpOptions);
  }
}
