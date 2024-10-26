import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarEmpleadoService {
  private apiUrl = 'http://localhost:3000/empleados';

  constructor(private http: HttpClient) {}

  async addJorge(): Promise<Object>  {
    let cosa: any;
    await this.http.post(this.apiUrl, {"nombre": "rigoberto"}).subscribe(something => {
      console.log(something);
      cosa = something;
    });
    return cosa;
  }
}
