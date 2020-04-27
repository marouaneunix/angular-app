import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from 'src/app/models/Author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  @Input() authors: Author;
  @Output() onDetailsEmitEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  getDetails(id: number):void {
    this.onDetailsEmitEvent.emit(id);
  }

}
