import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Author } from '../models/Author';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  url = `${environment.apiUrl}/author`;

  getAuthors() :Observable<Author[]> {
    return this.http.get<Author[]>(this.url);
  }

  filter(name: string) :Observable<Author[]> {
    return this.http.get<Author[]>(`${this.url}?name=${name}`);
  }

  getAuthor(authorId: number) :Observable<Author> {
    return this.http.get<Author>(`${this.url}/${authorId}`)
  }

  save(author: Author) :Observable<any> {
    return this.http.post<void>(`${this.url}`, author);
  }
}
