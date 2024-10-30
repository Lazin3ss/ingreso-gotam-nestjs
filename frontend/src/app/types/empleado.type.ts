export type Empleado = {
    id: number;
    nombre: string;
    fechaDeNacimiento: string;
    areaDeTrabajoId: number;
    areaDeTrabajoNombre: string;
    esDesarrollador: boolean;
    descripcion: string;
    fechaDeAlta: Date;
    fechaDeBaja: Date;
  }