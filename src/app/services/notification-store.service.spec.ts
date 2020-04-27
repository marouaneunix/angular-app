import { TestBed } from '@angular/core/testing';

import { NotificationStoreService } from './notification-store.service';

describe('NotificationStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationStoreService = TestBed.get(NotificationStoreService);
    expect(service).toBeTruthy();
  });
});
