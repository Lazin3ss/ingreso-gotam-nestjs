export class Empleado {
    id: number;
    nombre: string;
    fechaDeNacimiento: Date;
    desarrollador: boolean;
    descripcion: string;
    areaDeTrabajo: string;

    constructor(id: number, name: string, date: string, isDev: boolean, description: string, workarea: string) {
        this.id = id;
        this.nombre = name;
        this.fechaDeNacimiento = new Date(date);
        this.desarrollador = isDev;
        this.descripcion = description;
        this.areaDeTrabajo = workarea; 
    };
}
