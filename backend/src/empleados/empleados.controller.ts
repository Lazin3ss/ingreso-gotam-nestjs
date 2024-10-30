import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './models/empleado.model';
import { EmpleadoDto } from './dto/empleado.dto';

@Controller('api/empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  async create(@Body() createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    try {
      return await this.empleadosService.create(createEmpleadoDto);
    } catch (error) {
      if (error.name == "SequelizeForeignKeyConstraintError") {
        throw new HttpException('El empleado especificado no existe', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException('No se pudo agregar el empleado', HttpStatus.BAD_REQUEST);
      }
    }
  }

  @Get()
  async find(@Body() empleadoDto: EmpleadoDto): Promise<Empleado | Empleado[]> {
    let empleado: Empleado;
    if (empleadoDto.id != null) {
      empleado = await this.empleadosService.findOne(+empleadoDto.id);
    } else if (empleadoDto.nombre != null) {
      empleado = await this.empleadosService.findByName(empleadoDto.nombre);
    } else {
      return await this.empleadosService.findAll();
    }
    if (empleado == null) {
      throw new HttpException("La ID especificada no corresponde a un empleado existente", HttpStatus.NOT_FOUND);
    } else {
      return empleado;
    }
  }

  @Patch()
  async update(@Body() updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    try {
      return await this.empleadosService.update(updateEmpleadoDto);
    } catch (error) {
      throw new HttpException('La ID especificada no corresponde a un empleado existente', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete()
  async remove(@Body() empleadoDto: EmpleadoDto): Promise<Empleado>  {
    try {
      return await this.empleadosService.remove(+empleadoDto.id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
