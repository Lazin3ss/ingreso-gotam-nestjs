import { TestBed } from '@angular/core/testing';

import { AreasDeTrabajoService } from './areasdetrabajo.service';

describe('AreasdetrabajoService', () => {
  let service: AreasDeTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreasDeTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
