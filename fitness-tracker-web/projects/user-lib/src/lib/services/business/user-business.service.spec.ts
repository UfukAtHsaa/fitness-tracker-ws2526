import { TestBed } from '@angular/core/testing';

import { UserBusinessService } from './user-business.service';

describe('UserBusinessService', () => {
  let service: UserBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
