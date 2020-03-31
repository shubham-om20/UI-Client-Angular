import { TestBed } from '@angular/core/testing';

import { PasswordServiceService } from './password-service.service';

describe('PasswordServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordServiceService = TestBed.get(PasswordServiceService);
    expect(service).toBeTruthy();
  });
});
