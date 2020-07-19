import { TestBed } from '@angular/core/testing';

import { AuthorRxjsService } from './author-rxjs.service';

describe('AuthorRxjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorRxjsService = TestBed.get(AuthorRxjsService);
    expect(service).toBeTruthy();
  });
});
