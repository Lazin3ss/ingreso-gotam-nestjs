import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { AreasDeTrabajoService } from './areas-de-trabajo.service';
import { CreateAreaDeTrabajoDto } from './dto/create-area-de-trabajo.dto';
import { UpdateAreaDeTrabajoDto } from './dto/update-area-de-trabajo.dto';
import { AreaDeTrabajo } from './models/area-de-trabajo.model';
import { AreaDeTrabajoDto } from './dto/area-de-trabajo.dto';

@Controller('api/areasdetrabajo')
export class AreasDeTrabajoController {
  constructor(private readonly areasDeTrabajoService: AreasDeTrabajoService) {}

  @Post()
  async create(@Body() createAreaDeTrabajoDto: CreateAreaDeTrabajoDto) {
    return this.areasDeTrabajoService.create(createAreaDeTrabajoDto);
  }

  @Get()
  async find(@Body() areaDeTrabajoDto: AreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    let areaDeTrabajo: AreaDeTrabajo;
    if (areaDeTrabajoDto.id != null) {
      areaDeTrabajo = await this.areasDeTrabajoService.findOne(+areaDeTrabajoDto.id);
    } else if (areaDeTrabajoDto.nombre != null) {
      if (areaDeTrabajoDto.createIfDoesntExist) {
        areaDeTrabajo = await this.areasDeTrabajoService.findOrCreate(areaDeTrabajoDto.nombre);
      } else {
        areaDeTrabajo = await this.areasDeTrabajoService.findByName(areaDeTrabajoDto.nombre);
      }
    }
    if (areaDeTrabajo != null) {
      return areaDeTrabajo;
    } else {
      throw new HttpException("La ID especificada no corresponde a un area de trabajo existente", HttpStatus.NOT_FOUND);
    }
  }

  @Patch()
  async update(@Body() updateAreaDeTrabajoDto: UpdateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    try {
      return await this.areasDeTrabajoService.update(updateAreaDeTrabajoDto);
    } catch (error) {
      throw new HttpException('La ID especificada no corresponde a un area de trabajo existente', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete()
  async remove(@Body() areaDeTrabajoDto: AreaDeTrabajoDto): Promise<void>  {
    try {
      await this.areasDeTrabajoService.remove(+areaDeTrabajoDto.id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
