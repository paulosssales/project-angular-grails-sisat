import { TestBed } from '@angular/core/testing';

import { ImpressoraService } from './impressora.service';

describe('ImpressoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpressoraService = TestBed.get(ImpressoraService);
    expect(service).toBeTruthy();
  });
});
