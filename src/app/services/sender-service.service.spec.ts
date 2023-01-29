import { TestBed } from '@angular/core/testing';

import { SenderServiceService } from './sender-service.service';

describe('SenderServiceService', () => {
  let service: SenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
