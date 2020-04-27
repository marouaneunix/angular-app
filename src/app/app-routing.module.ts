import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorViewComponent } from './components/author-view/author-view.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { NewAuthorViewComponent } from './components/new-author-view/new-author-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
  {path: 'authors/new', component: NewAuthorViewComponent },
  {path: 'authors/:id', component: AuthorDetailsComponent },
  {path: 'authors', component: AuthorViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
