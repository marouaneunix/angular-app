import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    ChartsModule,
    AngularFontAwesomeModule
  ]
})
export class CommentsModule { }
