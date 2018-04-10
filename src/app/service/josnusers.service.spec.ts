import { TestBed, inject } from '@angular/core/testing';

import { JosnusersService } from './josnusers.service';

describe('JosnusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JosnusersService]
    });
  });

  it('should be created', inject([JosnusersService], (service: JosnusersService) => {
    expect(service).toBeTruthy();
  }));
});
