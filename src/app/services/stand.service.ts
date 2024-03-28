import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stand } from '../Stand';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class StandService {

  private apiUrl = 'http://localhost:5000/stands'; 

  constructor(private http: HttpClient) { }


  getData(): Observable<Stand[]> {
    return this.http.get<Stand[]>(this.apiUrl);
  }

  addNew(stand: Stand): Observable<Stand> {
    return this.http.post<Stand>(this.apiUrl, stand, httpOptions)
  }

  deleteItem(stand: Stand): Observable<Stand> {
    const url = `${this.apiUrl}/${stand.id}`; // URL for the specific task
    return this.http.delete<Stand>(url);
  }

  editItem(stand: Stand): Observable<Stand> {
    const url = `${this.apiUrl}/${stand.id}`; // URL for the specific task
    console.log("service called" + stand.name)
    return this.http.put<Stand>(url, stand, httpOptions);
  }

}
