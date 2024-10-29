import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AreasDeTrabajoService } from '../../services/areasdetrabajo.service';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [NgFor],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  empleados: any = [];

  constructor(
      private empleadosService: EmpleadosService,
      private areasDeTrabajoService: AreasDeTrabajoService
    ) {}

  getAllEmpleados() {
    return this.empleadosService.getAllEmpleados();
  }
  convertAreaIdToName(id: number) {
    return this.areasDeTrabajoService.findNameById(id);
  }

  convertBirthdateToAge(birthdate: Date) {
    let timeDiff = Math.abs(Date.now() - new Date(birthdate).getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

  sanitizeDatestring(date: Date) {
    if (date != null) {
      return date.toString().replace(/([T])+|(\.(\d)*Z)/g, ' ');
    }
    return "";
  }
}
