import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { EmpleadoFormComponent } from './ui/empleado-form.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosTableRowComponent } from './ui/table-row.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [NgIf, NgFor, EmpleadoFormComponent, EmpleadosTableRowComponent, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  constructor(
      private empleadosService: EmpleadosService
    ) {}

  getAllEmpleados() {
    return this.empleadosService.findAll();
  }
}
