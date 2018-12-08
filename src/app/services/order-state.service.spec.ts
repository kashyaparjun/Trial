import { TestBed, inject } from '@angular/core/testing';

import { OrderStateService } from './order-state.service';

describe('OrderStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderStateService]
    });
  });

  it('should be created', inject([OrderStateService], (service: OrderStateService) => {
    expect(service).toBeTruthy();
  }));
});
