import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sector } from '../Sector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'http://localhost:5000/sectors'; 

  constructor(private http: HttpClient) { }


  getData(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.apiUrl);
  }
}
