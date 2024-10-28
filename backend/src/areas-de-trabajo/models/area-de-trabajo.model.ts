import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Empleado } from 'src/empleados/models/empleado.model';

@Table
export class AreaDeTrabajo extends Model {
  @Column
  nombre: string;

  @HasMany(() => Empleado, { onDelete: 'SET NULL' })
  empleados: Empleado[];
}