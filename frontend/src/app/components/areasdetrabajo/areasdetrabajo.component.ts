import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AreasDeTrabajoService } from '../../services/areasdetrabajo.service';
import { EmpleadosService } from '../../services/empleados.service';


@Component({
  imports: [NgIf, NgFor],
  selector: 'app-areasdetrabajo',
  standalone: true,
  templateUrl: './areasdetrabajo.component.html',
  styleUrl: './areasdetrabajo.component.css'
})

export class AreasDeTrabajoComponent {
  editMode = false;
  editId = -1;
  nombre = '';

  constructor(
    private areasDeTrabajoService: AreasDeTrabajoService,
    private empleadosService: EmpleadosService
  ) {}

  getAllAreasDeTrabajo() {
    return this.areasDeTrabajoService.getAllAreasDeTrabajo();
  }

  getAreaDeTrabajoById(id: number) {
    return this.areasDeTrabajoService.getAreaDeTrabajoById(id);
  }

  getAreaDeTrabajoTotalEmployees(id: number) {
    return this.empleadosService.getEmpleadosByAreaDeTrabajoId(id).length;
  }

  removeAreaDeTrabajo(id: number) {
    this.areasDeTrabajoService.removeById(id);
  }

  startEditMode(id: number) {
    this.editMode = true;
    this.nombre = '';
    if (id != null) {
      this.editId = id;
      const area = this.getAreaDeTrabajoById(id);
      if (area != null) {
        this.nombre = area.nombre;
      }
    }
  }

  editing(id: number) {
    return this.editId == id;
  }

  endEditMode(submit: boolean) {
    if (submit) {
      this.areasDeTrabajoService.updateAreaDeTrabajo(this.editId, this.nombre);
    }
    this.editMode = false;
    this.nombre = '';
    this.editId = -1;
  }
}
