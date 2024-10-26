import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgregarEmpleadoService } from '../agregarempleado.service';

@Component({
  selector: 'app-agregar-empleado-form',
  standalone: true,
  imports: [],
  templateUrl: './agregar-empleado-form.component.html',
  styleUrl: './agregar-empleado-form.component.css'
})

export class AgregarEmpleadoFormComponent {
  constructor(private agregarempleadoService: AgregarEmpleadoService) {}

  addJorge(): void {
    const something = this.agregarempleadoService.addJorge();
    console.log(something);
  }
}
