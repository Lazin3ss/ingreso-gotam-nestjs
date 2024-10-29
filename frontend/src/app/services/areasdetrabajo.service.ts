import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreaDeTrabajo } from '../models/areadetrabajo.model';

@Injectable({
  providedIn: 'root'
})
export class AreasDeTrabajoService {
  areas: Array<AreaDeTrabajo> = [];

  constructor(private http: HttpClient) {
    this.http.get<AreaDeTrabajo[]>("http://localhost:3000/api/areasdetrabajo").subscribe(response => {
      this.areas = response;
    });
  }

  getAllAreasDeTrabajo() {
    return this.areas;
  }

  findNameById(id: number) {
    let search = this.areas.find(area => area.id == id);
    if (search != null) {
      return search.nombre;
    }
    return "";
  }

  // sleep(ms: number) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
}
