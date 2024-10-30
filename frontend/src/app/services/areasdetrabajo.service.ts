import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreaDeTrabajo } from '../types/areadetrabajo.type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreasDeTrabajoService {
  areas: Map<number, AreaDeTrabajo> = new Map<number, AreaDeTrabajo>();

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.areas.clear()
    this.http.get<AreaDeTrabajo[]>(environment.apiUrl+"/areasdetrabajo").subscribe(response => {
      this.areas = new Map<number, AreaDeTrabajo>(response.map(obj => [obj.id, obj]));
      console.log(this.areas);
    });
  }

  async create(nombre: string) {
    let id = -1;
    const statusPost = this.http.post<AreaDeTrabajo>(environment.apiUrl+"/areasdetrabajo", {
      "nombre": nombre
    }).subscribe(response => {
      this.areas.set(response.id, response);
      id = response.id;
    });
    // Esperamos a que se cierre la suscripción del POST antes de devolver el área nueva
    while (!statusPost.closed) {
      await this.sleep(100);
    }
    return this.areas.get(id);
  }

  findAll() {
    return [...this.areas.values()];
  }

  findOne(id: number) {
    return this.areas.get(id);
  }

  findOneByName(name: string) {
    return [...this.areas.values()].find(area => area.nombre == name);
  }

  async findOneByNameOrCreate(name: string) {
    let area = this.findOneByName(name);
    if (area == null) {
      area = await this.create(name);
    }
    return area;
  }
  

  update(id: number) {
    const area = this.findOne(id);
    if (area != null) {
      this.http.patch<AreaDeTrabajo>(environment.apiUrl+"/areasdetrabajo", {
        "id": area.id,
        "nombre": area.nombre
      }).subscribe(response => {
        this.areas.set(response.id, response)
      });
    }
  }

  delete(id: number) {
    this.http.delete<AreaDeTrabajo>(environment.apiUrl+"/areasdetrabajo", {
      body: { id: id }
    }).subscribe(() => {
      this.areas.delete(id);
    });
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
