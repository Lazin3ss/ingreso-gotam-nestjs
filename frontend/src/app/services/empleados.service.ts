import { Injectable } from '@angular/core';
import { Empleado } from '../types/empleado.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Map<number, Empleado> = new Map<number, Empleado>();

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.http.get<Empleado[]>(environment.apiUrl+"/empleados").subscribe(response => {
      this.empleados = new Map<number, Empleado>(response.map(obj => [obj.id, obj]));
      console.log(this.empleados);
    });
  }

  create(nombre: string, fechaDeNacimiento: string, esDesarrollador?: boolean, descripcion?: string, areaDeTrabajoId?: number) {
    this.http.post<Empleado>(environment.apiUrl+"/empleados",{
      "nombre": nombre,
      "fechaDeNacimiento": new Date(fechaDeNacimiento),
      "areaDeTrabajoId": areaDeTrabajoId,
      "esDesarrollador": esDesarrollador,
      "descripcion": descripcion
    }).subscribe(response => {
      this.empleados.set(response.id, response);
    });
  }

  findAll() {
    return [...this.empleados.values()];
  }

  findAllByAreaDeTrabajoId(id: number) {
    let search = [...this.empleados.values()].filter(empleado => empleado.areaDeTrabajoId == id && empleado.fechaDeBaja == null);
    if (search != null) {
      return search;
    }
    return [];
  }

  findOne(id: number) {
    return this.empleados.get(id);
  }

  update(id: number) {
    const empleado = this.findOne(id);
    if (empleado != null) {
      this.http.patch<Empleado>(environment.apiUrl+"/empleados",{
        "id": empleado.id,
        "nombre": empleado.nombre,
        "fechaDeNacimiento": new Date(empleado.fechaDeNacimiento),
        "areaDeTrabajoId": empleado.areaDeTrabajoId,
        "esDesarrollador": empleado.esDesarrollador,
        "descripcion": empleado.descripcion
      }).subscribe(response => {
        this.empleados.set(response.id, response);
      });
    }
  }

  delete(id: number) {
    this.http.delete<Empleado>(environment.apiUrl+"/empleados", {
      body: { id: id }
    }).subscribe(response => {
      this.empleados.set(response.id, response);
    });
  }
}
