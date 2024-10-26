import { TestBed } from '@angular/core/testing';

import { AgregarEmpleadoService } from './agregarempleado.service';

describe('AgregarEmpleadoService', () => {
  let service: AgregarEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
