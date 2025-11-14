import { TestBed } from '@angular/core/testing';

import { UserProviderService } from './user-provider.service';

describe('UserProviderService', () => {
  let service: UserProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
