import { Test, TestingModule } from '@nestjs/testing';
import { AreasDeTrabajoController } from './areas-de-trabajo.controller';
import { AreasDeTrabajoService } from './areas-de-trabajo.service';

describe('AreasDeTrabajoController', () => {
  let controller: AreasDeTrabajoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreasDeTrabajoController],
      providers: [AreasDeTrabajoService],
    }).compile();

    controller = module.get<AreasDeTrabajoController>(AreasDeTrabajoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
