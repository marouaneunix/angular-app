import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailsComponent } from './author-details.component';
import { ActivatedRoute } from '@angular/router';

describe('AuthorDetailsComponent', () => {
  let component: AuthorDetailsComponent;
  let fixture: ComponentFixture<AuthorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
