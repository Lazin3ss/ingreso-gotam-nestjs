import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Empleado extends Model {
  @Column
  nombre: string;

  @Column
  fechaDeNacimiento: Date;

  @Column({ defaultValue: false })
  esDesarrollador: boolean;

  @Column({ defaultValue: "" })
  descripcion: string;

  @Column({ defaultValue: "Planta Baja" })
  areaDeTrabajo: string;
}