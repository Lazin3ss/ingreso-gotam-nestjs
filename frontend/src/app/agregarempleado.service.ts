import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgregarEmpleadoService {

  constructor(private http: HttpClient, private router: Router) {}

  async addJorge(): Promise<Object>  {
    let cosa: any;
    await this.http.post("/api/empleados", {"nombre": "rigoberto"}).subscribe(something => {
      console.log(something);
      cosa = something;
    });
    return cosa;
  }
}
