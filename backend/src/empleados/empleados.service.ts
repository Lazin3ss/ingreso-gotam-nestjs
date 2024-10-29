import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './models/empleado.model';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectModel(Empleado)
    private empleadoModel: typeof Empleado,
  ) {}

  create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    return this.empleadoModel.create({
      nombre: createEmpleadoDto.nombre,
      fechaDeNacimiento: new Date(createEmpleadoDto.fechaDeNacimiento),
      areaDeTrabajoId: createEmpleadoDto.areaDeTrabajoId,
      esDesarrollador: createEmpleadoDto.esDesarrollador,
      descripcion: createEmpleadoDto.descripcion
    });
  }

  findAll(): Promise<Empleado[]> {
    return this.empleadoModel.findAll({
      paranoid: false
    });
  }
  
  findOne(id: number): Promise<Empleado> {
    return this.empleadoModel.findOne({
      where: {
        id,
      },
      paranoid: false
    });
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    const empleado = await this.findOne(id);
    if (empleado == null) {
      throw new Error('La ID especificada no corresponde a un empleado existente');
    }
    await empleado.update(updateEmpleadoDto);
    return empleado;
  }

  async remove(id: number): Promise<void> {
    const empleado = await this.findOne(id);
    if (empleado == null) {
      throw new Error('La ID especificada no corresponde a un empleado existente');
    }
    await empleado.destroy();
  }
}
