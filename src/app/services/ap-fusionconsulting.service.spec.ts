import { TestBed } from '@angular/core/testing';

import { ApFusionconsultingService } from './ap-fusionconsulting.service';

describe('ApFusionconsultingService', () => {
  let service: ApFusionconsultingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApFusionconsultingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
