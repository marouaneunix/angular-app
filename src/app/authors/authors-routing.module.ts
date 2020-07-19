import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorViewComponent } from './components/new-author-view/new-author-view.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorViewComponent } from './components/author-view/author-view.component';


const routes: Routes = [
  {path: 'new', component: NewAuthorViewComponent },
  {path: ':id', component: AuthorDetailsComponent },
  {path: '', component: AuthorViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
