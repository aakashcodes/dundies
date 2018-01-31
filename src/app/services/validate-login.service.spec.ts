import { TestBed, inject } from '@angular/core/testing';

import { ValidateLoginService } from './validate-login.service';

describe('ValidateLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateLoginService]
    });
  });

  it('should be created', inject([ValidateLoginService], (service: ValidateLoginService) => {
    expect(service).toBeTruthy();
  }));
});
