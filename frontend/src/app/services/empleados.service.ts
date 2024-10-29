import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Array<Empleado> = [];

  constructor(private http: HttpClient) {
    this.http.get<Empleado[]>("http://localhost:3000/api/empleados").subscribe(response => {
      this.empleados = response;
    });
  }

  getAllEmpleados() {
    return this.empleados;
  }

  getEmpleadosByAreaDeTrabajoId(id: number) {
    let search = this.empleados.filter(empleado => empleado.areaDeTrabajoId == id);
    if (search != null) {
      return search;
    }
    return [];
  }
}
