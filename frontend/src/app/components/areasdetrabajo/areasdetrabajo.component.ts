import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AreasDeTrabajoService } from '../../services/areasdetrabajo.service';
import { EmpleadosService } from '../../services/empleados.service';
import { AreaDeTrabajoFormComponent } from './ui/areadetrabajo-form.component';
import { FormsModule } from '@angular/forms';
import { AreasDeTrabajoTableRowComponent } from './ui/table-row.component';


@Component({
  imports: [AreaDeTrabajoFormComponent, AreasDeTrabajoTableRowComponent, NgIf, NgFor, FormsModule,],
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
    return this.areasDeTrabajoService.findAll();
  }

  getAreaDeTrabajoById(id: number) {
    return this.areasDeTrabajoService.findOne(id);
  }

  getAreaDeTrabajoTotalEmployees(id: number) {
    return this.empleadosService.findAllByAreaDeTrabajoId(id).length;
  }

  deleteAreaDeTrabajo(id: number) {
    this.areasDeTrabajoService.delete(id);
  }
}
