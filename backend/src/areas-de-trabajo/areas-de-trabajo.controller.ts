import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { AreasDeTrabajoService } from './areas-de-trabajo.service';
import { CreateAreaDeTrabajoDto } from './dto/create-area-de-trabajo.dto';
import { UpdateAreaDeTrabajoDto } from './dto/update-area-de-trabajo.dto';
import { AreaDeTrabajo } from './models/area-de-trabajo.model';

@Controller('api/areasdetrabajo')
export class AreasDeTrabajoController {
  constructor(private readonly areasDeTrabajoService: AreasDeTrabajoService) {}

  @Post()
  async create(@Body() createAreaDeTrabajoDto: CreateAreaDeTrabajoDto) {
    return this.areasDeTrabajoService.create(createAreaDeTrabajoDto);
  }

  @Get()
  async findAll() {
    return this.areasDeTrabajoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AreaDeTrabajo> {
    const areaDeTrabajo = await this.areasDeTrabajoService.findOne(+id);
    if (areaDeTrabajo != null) {
      return areaDeTrabajo;
    } else {
      throw new HttpException("La ID especificada no corresponde a un area de trabajo existente", HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAreaDeTrabajoDto: UpdateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    try {
      return await this.areasDeTrabajoService.update(+id, updateAreaDeTrabajoDto);
    } catch (error) {
      throw new HttpException('La ID especificada no corresponde a un area de trabajo existente', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void>  {
    try {
      await this.areasDeTrabajoService.remove(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
