import { Test, TestingModule } from '@nestjs/testing';
import { AreasDeTrabajoService } from './areas-de-trabajo.service';

describe('AreasDeTrabajoService', () => {
  let service: AreasDeTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreasDeTrabajoService],
    }).compile();

    service = module.get<AreasDeTrabajoService>(AreasDeTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
