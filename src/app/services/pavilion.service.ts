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

}
