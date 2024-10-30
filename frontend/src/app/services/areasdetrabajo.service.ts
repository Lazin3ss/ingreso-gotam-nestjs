import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreaDeTrabajo } from '../types/areadetrabajo.type';

@Injectable({
  providedIn: 'root'
})
export class AreasDeTrabajoService {
  areas: Array<AreaDeTrabajo> = [];

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    return this.http.get<AreaDeTrabajo[]>("http://localhost:3000/api/areasdetrabajo").subscribe(response => {
      this.areas = response;
    });
  }

  create(nombre: string) {
    this.http.post("http://localhost:3000/api/areasdetrabajo/",{
      "nombre": nombre
    }).subscribe(response => {
      console.log(response);
      this.refresh();
    });
  }

  findAll() {
    return this.areas;
  }

  findOne(id: number) {
    let search = this.areas.find(area => area.id == id);
    return search;
  }

  findOneByName(name: string) {
    let search = this.areas.find(area => area.nombre == name);
    return search;
  }

  async findOneByNameOrCreate(name: string) {
    const area = this.findOneByName(name);
    if (area != null) {
      return area;
    } else {
      const statusPost = this.http.post("http://localhost:3000/api/areasdetrabajo/",{
        "nombre": name
      }).subscribe(async () => {
        // Esperamos a que se refresque la lista de áreas de trabajo antes de continuar
        const statusRefresh = this.refresh();
        while (!statusRefresh.closed) {
          await this.sleep(100);
        }
      });
      // Esperamos a que se cierre la suscripción del POST antes de servir el área nueva
      while (!statusPost.closed) {
        await this.sleep(100);
      }
      return this.areas[length-1];
    }
  }
  

  update(id: number) {
    const area = this.findOne(id);
    if (area != null) {
      this.http.patch("http://localhost:3000/api/areasdetrabajo/"+id,{
        "nombre": area.nombre
      }).subscribe(response => {
        console.log(response);
        this.refresh();
      });
    }
  }

  delete(id: number) {
    this.http.delete("http://localhost:3000/api/areasdetrabajo/"+id).subscribe(response => {
      console.log(response);
      this.refresh();
    });
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
