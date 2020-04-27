import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/Author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  author: Author;
  isError: boolean;
  constructor(private route: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit() {
    this.isError = false;
    this.route.paramMap.subscribe(params => {
      this.getAuthor(Number.parseInt(params.get('id')));
    });
  }

  getAuthor(authorId: number):void {
    this.authorService.getAuthor(authorId)
      .subscribe({
        next: author => this.author = author,
        error: err => this.isError = true,
      });
  }

}
