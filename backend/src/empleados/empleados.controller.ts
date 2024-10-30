import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './models/empleado.model';

@Controller('api/empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  async create(@Body() createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    try {
      return await this.empleadosService.create(createEmpleadoDto);
    } catch (error) {
      if (error.name == "SequelizeForeignKeyConstraintError") {
        throw new HttpException('La Area de Trabajo especificada no existe', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException('No se pudo agregar el empleado', HttpStatus.BAD_REQUEST);
      }
      
    }
  }

  @Get()
  async findAll(): Promise<Empleado[]> {
    return await this.empleadosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Empleado> {
    const empleado = await this.empleadosService.findOne(+id);
    if (empleado != null) {
      return empleado;
    } else {
      throw new HttpException("No se encontró el empleado", HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    try {
      return await this.empleadosService.update(+id, updateEmpleadoDto);
    } catch (error) {
      if (error.name == "SequelizeForeignKeyConstraintError") {
        throw new HttpException('La Area de Trabajo especificada no existe', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException('La ID especificada no corresponde a un empleado existente', HttpStatus.BAD_REQUEST);
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Empleado>  {
    try {
      return await this.empleadosService.remove(+id);
    } catch (error) {
      throw new HttpException('La ID especificada no corresponde a un empleado existente', HttpStatus.BAD_REQUEST);
    }
  }
}
