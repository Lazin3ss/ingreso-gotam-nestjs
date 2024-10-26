import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  findOne(@Res() response, @Param('id') id: string) {
    let search = this.empleadosService.findOne(+id);
    if (search != undefined) {
      return response.status(HttpStatus.OK).send(search);
    } else {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @Patch(':id')
  update(@Res() response, @Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    let patchedEmpleado = this.empleadosService.update(+id, updateEmpleadoDto);
    if (patchedEmpleado != undefined) {
      return response.status(HttpStatus.OK).send(patchedEmpleado);
    } else {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @Delete(':id')
  remove(@Res() response, @Param('id') id: string) {
    let removeEmpleadoStatus = this.empleadosService.remove(+id);
    if (removeEmpleadoStatus == true) {
      return response.status(HttpStatus.OK).send();
    } else {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
  }
}
