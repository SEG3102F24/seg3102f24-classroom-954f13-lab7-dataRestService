import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  getAuthorById(id: string): Observable<any> {
    return this.http.get(`${baseUrl}authors/${id}`);
  }
}
