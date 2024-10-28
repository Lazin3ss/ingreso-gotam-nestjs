import { Module } from '@nestjs/common';
import { AreasDeTrabajoService } from './areas-de-trabajo.service';
import { AreasDeTrabajoController } from './areas-de-trabajo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AreaDeTrabajo } from './models/area-de-trabajo.model';

@Module({
  imports: [SequelizeModule.forFeature([AreaDeTrabajo])],
  controllers: [AreasDeTrabajoController],
  providers: [AreasDeTrabajoService]
})
export class AreasDeTrabajoModule {}
