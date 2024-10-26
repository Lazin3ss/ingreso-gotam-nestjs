import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { Empleado } from './models/empleado.model';

@Module({
  imports: [SequelizeModule.forFeature([Empleado])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
