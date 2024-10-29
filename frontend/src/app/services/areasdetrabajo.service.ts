import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreaDeTrabajo } from '../models/areadetrabajo.model';

@Injectable({
  providedIn: 'root'
})
export class AreasDeTrabajoService {
  areas: Array<AreaDeTrabajo> = [];

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.http.get<AreaDeTrabajo[]>("http://localhost:3000/api/areasdetrabajo").subscribe(response => {
      this.areas = response;
    });
  }

  getAllAreasDeTrabajo() {
    return this.areas;
  }

  getAreaDeTrabajoById(id: number) {
    let search = this.areas.find(area => area.id == id);
    return search;
  }

  findNameById(id: number) {
    let search = this.areas.find(area => area.id == id);
    if (search != null) {
      return search.nombre;
    }
    return "";
  }

  addAreaDeTrabajo(nombre: string) {
    this.http.post("http://localhost:3000/api/areasdetrabajo/",{
      "nombre": nombre
    }).subscribe(response => {
      console.log(response);
      this.refresh();
    });
  }

  updateAreaDeTrabajo(id: number, nombre: string) {
    this.http.patch("http://localhost:3000/api/areasdetrabajo/"+id,{
      "nombre": nombre
    }).subscribe(response => {
      console.log(response);
      this.refresh();
    });
  }

  removeById(id: number) {
    this.http.delete("http://localhost:3000/api/areasdetrabajo/"+id).subscribe(response => {
      console.log(response);
      this.refresh();
    });
  }

  // sleep(ms: number) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
}
