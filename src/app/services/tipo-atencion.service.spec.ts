import { TestBed } from '@angular/core/testing';

import { TipoAtencionService } from './tipo-atencion.service';

describe('TipoAtencionService', () => {
  let service: TipoAtencionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAtencionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
