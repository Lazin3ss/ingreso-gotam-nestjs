import { Injectable } from '@nestjs/common';
import { CreateAreaDeTrabajoDto } from './dto/create-area-de-trabajo.dto';
import { UpdateAreaDeTrabajoDto } from './dto/update-area-de-trabajo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AreaDeTrabajo } from './models/area-de-trabajo.model';
import { Op } from 'sequelize';

@Injectable()
export class AreasDeTrabajoService {

  constructor(
    @InjectModel(AreaDeTrabajo)
    private areaDeTrabajoModel: typeof AreaDeTrabajo,
  ) {}
  
  create(createAreaDeTrabajoDto: CreateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    return this.areaDeTrabajoModel.create({
      nombre: createAreaDeTrabajoDto.nombre
    });
  }

  findAll(): Promise<AreaDeTrabajo[]> {
    return this.areaDeTrabajoModel.findAll();
  }

  findOne(id: number): Promise<AreaDeTrabajo> {
    return this.areaDeTrabajoModel.findOne({
      where: {
        id,
      },
    });
  }

  findByName(areaName: string): Promise<AreaDeTrabajo> {
    return this.areaDeTrabajoModel.findOne({
      where: {
        nombre: {
          [Op.like]: areaName
        }
      },
    });
  }

  findOrCreate(areaName: string): Promise<AreaDeTrabajo> {
    return this.areaDeTrabajoModel.findOrCreate({
      where: {
        nombre: {
          [Op.like]: areaName
        }
      }
    })[0];
  }

  async update(updateAreaDeTrabajoDto: UpdateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    const areaDeTrabajo = await this.findOne(+updateAreaDeTrabajoDto.id);
    if (areaDeTrabajo == null) {
      throw new Error('La ID especificada no corresponde a un area de trabajo existente');
    }
    await areaDeTrabajo.update(updateAreaDeTrabajoDto);
    return areaDeTrabajo;
  }

  async remove(id: number) {
    const areaDeTrabajo = await this.findOne(id);
    if (areaDeTrabajo == null) {
      throw new Error('La ID especificada no corresponde a un area de trabajo existente');
    }
    await areaDeTrabajo.destroy();
  }
}
