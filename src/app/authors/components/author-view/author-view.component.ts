import { Component, OnInit, Inject } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/Author';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.css']
})
export class AuthorViewComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorService, private router: Router ) { }

  ngOnInit() {
    this.fetchAuthors();
  }

  fetchAuthors():void {
    this.authorService.getAuthors().subscribe((authors: Author[]) => this.authors =  authors);
  }

  filterByAuthorName(authorName: string):void {
    if(authorName.trim().length === 0) {
      this.fetchAuthors();
      return;
    }
    this.authorService.filter(authorName).subscribe((authors: Author[]) => this.authors =  authors)
  }

  getAuthorDetails(authorId: number):void {
    this.router.navigate([`/authors/${authorId}`]); 
  }
}
