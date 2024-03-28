import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pavilion } from '../Pavilion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PavilionService {

  private apiUrl = 'http://localhost:5000/pavilions'; 

  constructor(private http: HttpClient) { }


  getData(): Observable<Pavilion[]> {
    return this.http.get<Pavilion[]>(this.apiUrl);
  }

  addNew(pavilion: Pavilion): Observable<Pavilion> {
    return this.http.post<Pavilion>(this.apiUrl, pavilion, httpOptions)

  }

  deleteItem(pavilion: Pavilion): Observable<Pavilion> {
    const url = `${this.apiUrl}/${pavilion.id}`; // URL for the specific task
    return this.http.delete<Pavilion>(url);
  }

  editItem(pavilion: Pavilion): Observable<Pavilion> {
    const url = `${this.apiUrl}/${pavilion.id}`; // URL for the specific task
    console.log("service called" + pavilion.name)
    return this.http.put<Pavilion>(url, pavilion, httpOptions);
  }

}
