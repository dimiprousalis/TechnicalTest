import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { UserInterface } from '../User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:5000/user';

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata)
  }
  getUserByUsername(username: string): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.apiurl}/?username=${username}`);
  }
  getrole() {
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }
}

