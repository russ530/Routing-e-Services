import { TestBed } from '@angular/core/testing';

import { StudentiService } from './studente-services';

describe('StudenteServices', () => {
  let service: StudentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
