import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sector } from '../Sector';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'http://localhost:5000/sectors'; 

  constructor(private http: HttpClient) { }


  getData(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.apiUrl);
  }

  addNew(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(this.apiUrl, sector, httpOptions)
  }

  deleteItem(sector: Sector): Observable<Sector> {
    const url = `${this.apiUrl}/${sector.id}`; // URL for the specific task
    return this.http.delete<Sector>(url);
  }

  editItem(sector: Sector): Observable<Sector> {
    const url = `${this.apiUrl}/${sector.id}`; // URL for the specific task
    console.log("service called" + sector.name)
    return this.http.put<Sector>(url, sector, httpOptions);
  }
}
