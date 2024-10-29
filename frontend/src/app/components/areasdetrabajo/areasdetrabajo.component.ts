import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AreasDeTrabajoService } from '../../services/areasdetrabajo.service';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  imports: [NgFor],
  selector: 'app-areasdetrabajo',
  standalone: true,
  templateUrl: './areasdetrabajo.component.html',
  styleUrl: './areasdetrabajo.component.css'
})

export class AreasDeTrabajoComponent {
  constructor(
    private areasDeTrabajoService: AreasDeTrabajoService,
    private empleadosService: EmpleadosService
  ) {}

  getAllAreasDeTrabajo() {
    return this.areasDeTrabajoService.getAllAreasDeTrabajo();
  }

  getAreaDeTrabajoTotalEmployees(id: number) {
    return this.empleadosService.getEmpleadosByAreaDeTrabajoId(id).length;
  }
}
