import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './models/empleado.model';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string): Promise<Empleado> {
    const empleado = await this.empleadosService.findOne(+id);
    if (empleado != null) {
      return response.status(HttpStatus.OK).send(empleado);
    } else {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @Patch(':id')
  async update(@Res() response, @Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    const updatedEmpleado = await this.empleadosService.update(+id, updateEmpleadoDto);
    if (updatedEmpleado != null) {
      return response.status(HttpStatus.OK).send(updatedEmpleado);
    } else {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string): Promise<void>  {
    let removed = false;
    removed = await this.empleadosService.remove(+id);
    if (removed) {
      return response.status(HttpStatus.OK).send();
    } else {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
  }
}
