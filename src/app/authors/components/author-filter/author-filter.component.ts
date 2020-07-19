import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-author-filter',
  templateUrl: './author-filter.component.html',
  styleUrls: ['./author-filter.component.css']
})
export class AuthorFilterComponent implements OnInit {

  authorName = new FormControl('');
  @Output() onFilterEmitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleSearch():void {
    this.onFilterEmitEvent.emit(this.authorName.value);
  }

}
