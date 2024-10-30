import { Injectable } from '@angular/core';
import { Empleado } from '../types/empleado.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Array<Empleado> = [];

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.http.get<Empleado[]>("http://localhost:3000/api/empleados").subscribe(response => {
      this.empleados = response;
    });
  }

  findAll() {
    return this.empleados;
  }

  findAllByAreaDeTrabajoId(id: number) {
    let search = this.empleados.filter(empleado => empleado.areaDeTrabajoId == id);
    if (search != null) {
      return search;
    }
    return [];
  }

  findOne(id: number) {
    return this.empleados.find(empleado => empleado.id == id);
  }
  
  create(nombre: string, fechaDeNacimiento: string, esDesarrollador?: boolean, descripcion?: string, areaDeTrabajoId?: number) {
    this.http.post("http://localhost:3000/api/empleados/",{
      "nombre": nombre,
      "fechaDeNacimiento": fechaDeNacimiento,
      "areaDeTrabajoId": areaDeTrabajoId,
      "esDesarrollador": esDesarrollador,
      "descripcion": descripcion
    }).subscribe(response => {
      console.log(response);
      this.refresh();
    });
  }

  update(id: number) {
    const empleado = this.findOne(id);
    if (empleado != null) {
      this.http.patch("http://localhost:3000/api/empleados/"+id,{
        "nombre": empleado.nombre,
        "fechaDeNacimiento": empleado.fechaDeNacimiento,
        "areaDeTrabajoId": empleado.areaDeTrabajoId,
        "esDesarrollador": empleado.esDesarrollador,
        "descripcion": empleado.descripcion
      }).subscribe(response => {
        console.log(response);
        this.refresh();
      });
    }
  }

  delete(id: number) {
    this.http.delete("http://localhost:3000/api/empleados/"+id).subscribe(response => {
      console.log(response);
      this.refresh();
      console.log(this.empleados);
    });
  }
}
