import { Poke } from './../models/toter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToterService {

  API = 'http://localhost:5000/api/profs';

  constructor(private http: HttpClient) { }

  getToters() {
    return this.http.get(`${this.API}/`);
  }

  getToter(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  deleteToter(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }

  addToter(poke: Poke) {
    return this.http.post(`${this.API}/`, poke);
  }

  updateToter(id: number|undefined, updatetoter: Poke): Observable<Poke> {
    return this.http.put(`${this.API}/${id}`, updatetoter);
  }
}
