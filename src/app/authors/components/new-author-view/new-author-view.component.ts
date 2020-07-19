import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Author } from 'src/app/models/Author';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';
import { NotificationStoreService } from 'src/app/services/notification-store.service';

@Component({
  selector: 'app-new-author-view',
  templateUrl: './new-author-view.component.html',
  styleUrls: ['./new-author-view.component.css']
})
export class NewAuthorViewComponent implements OnInit {

  authorForm: FormGroup;
  author: any;
  
  constructor(private formBuilder: FormBuilder,
      private authorService: AuthorService,
      private router: Router,
      private notificationStore: NotificationStoreService) { }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      id: ['', Validators.required],
      age: [''],
      name: ['']
    })
  }

  save() {
    this.authorService.save(this.authorForm.value)
      .subscribe({
        next: () => {
          this.notificationStore.addNotification({type: 'success', message: 'Author created with success'});
          this.router.navigate([`/authors`]);
        },
        error: (err) => {this.notificationStore.addNotification({type: 'danger', message: `${err.message}`})}
      });
  }
}
