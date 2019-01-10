import { TestBed } from '@angular/core/testing';

import { ConsultaMonedasService } from './consulta-monedas.service';

describe('ConsultaMonedasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaMonedasService = TestBed.get(ConsultaMonedasService);
    expect(service).toBeTruthy();
  });
});
