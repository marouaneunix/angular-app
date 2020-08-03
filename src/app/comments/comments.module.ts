import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    ChartsModule,
    AngularFontAwesomeModule,
    DpDatePickerModule,
    FormsModule
  ]
})
export class CommentsModule { }
