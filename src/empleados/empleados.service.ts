import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  private readonly empleados: Empleado[] = [];

  create(createEmpleadoDto: CreateEmpleadoDto) {
    let newId = 0;
    if (this.empleados.length > 0) {
      newId = this.empleados[this.empleados.length-1].id + 1;
    }
    this.empleados.push(new Empleado(newId, createEmpleadoDto.nombre, createEmpleadoDto.fechaDeNacimiento, createEmpleadoDto.desarrollador, createEmpleadoDto.descripcion, createEmpleadoDto.areaDeTrabajo));
  }

  findAll() {
    return this.empleados;
  }
  
  findOne(id: number) {
    return this.empleados.find((empleado) => empleado.id == id);
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    let i = -1;
    this.empleados.find((empleado, index) => {
      if (empleado.id == id) {
        i = index;
        empleado = Object.assign(empleado,updateEmpleadoDto);
        return true;
      }
    })
    return this.empleados[i];
  }

  remove(id: number) {
    let found = false;
    this.empleados.find((empleado, index) => {
      if (empleado.id == id) {
        this.empleados.splice(index,1);
        found = true;
        return true;
      }
    })
    return found;
  }
}
