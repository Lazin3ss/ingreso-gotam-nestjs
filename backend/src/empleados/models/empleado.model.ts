import { BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, Model, Table } from 'sequelize-typescript';
import { AreaDeTrabajo } from 'src/areas-de-trabajo/models/area-de-trabajo.model';

@Table
export class Empleado extends Model {
  @Column
  nombre: string;

  @Column({ allowNull: false })
  fechaDeNacimiento: Date;

  @Column({ defaultValue: false })
  esDesarrollador: boolean;

  @Column({ defaultValue: "" })
  descripcion: string;

  @ForeignKey(() => AreaDeTrabajo)
  @Column
  areaDeTrabajoId: number;

  @BelongsTo(() => AreaDeTrabajo, { onDelete: 'SET NULL' })
  areaDeTrabajo: AreaDeTrabajo;

  @CreatedAt
  fechaDeAlta: Date;
  
  @DeletedAt
  fechaDeBaja?: Date;
}