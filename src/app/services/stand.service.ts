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

  addNew(sector: Stand): Observable<Stand> {
    return this.http.post<Stand>(this.apiUrl, sector, httpOptions)
  }

}
