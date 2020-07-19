import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuthorViewComponent } from './new-author-view.component';

describe('NewAuthorViewComponent', () => {
  let component: NewAuthorViewComponent;
  let fixture: ComponentFixture<NewAuthorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAuthorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuthorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
