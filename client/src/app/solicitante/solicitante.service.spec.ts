import { TestBed } from '@angular/core/testing';

import { SolicitanteService } from './solicitante.service';

describe('SolicitanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitanteService = TestBed.get(SolicitanteService);
    expect(service).toBeTruthy();
  });
});
