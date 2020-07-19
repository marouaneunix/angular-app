import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorFilterComponent } from './components/author-filter/author-filter.component';
import { AuthorViewComponent } from './components/author-view/author-view.component';
import { NewAuthorViewComponent } from './components/new-author-view/new-author-view.component';
import { AgeAuthorPipe } from './pipes/age-author.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorRxjsService } from './services/author-rxjs.service';


@NgModule({
  declarations: [
    AuthorDetailsComponent,
    AuthorListComponent,
    AuthorFilterComponent,
    AuthorViewComponent,
    NewAuthorViewComponent,
    AgeAuthorPipe
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthorsModule { }
