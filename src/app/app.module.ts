import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorViewComponent } from './components/author-view/author-view.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorFilterComponent } from './components/author-filter/author-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AgeAuthorPipe } from './pipes/age-author.pipe';
import { NewAuthorViewComponent } from './components/new-author-view/new-author-view.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthorViewComponent,
    AuthorListComponent,
    AuthorFilterComponent,
    AuthorDetailsComponent,
    AgeAuthorPipe,
    NewAuthorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
