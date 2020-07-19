import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthorsModule } from '../authors.module';

@Injectable({
  providedIn: 'root'
})
export class AuthorRxjsService {

  private readonly _author = new BehaviorSubject<string>('');
  private author$;
  constructor() { }

  get author(): string {
    return this.author$;
  }

  set author(author: string){
    this.author$ = author;
    this._author.next(this.author$);
  }
}
