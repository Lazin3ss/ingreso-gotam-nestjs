import { Component } from '@angular/core';
import { AreasDeTrabajoService } from '../../../services/areasdetrabajo.service';
import { NgFor, NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { EmpleadosService } from '../../../services/empleados.service';

@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './empleado-form.component.html',
})
export class EmpleadoFormComponent {
  constructor(
    private empleadosService: EmpleadosService,
    private areasDeTrabajoService: AreasDeTrabajoService) {}

  nombre = "";
  fechaDeNacimiento = "1970-01-01";
  areaDeTrabajo = "";
  esDesarrollador = false;
  descripcion = "";

  getAllAreasDeTrabajo() {
    return this.areasDeTrabajoService.findAll();
  }

  async onSubmit() {
    if (this.areaDeTrabajo != "") {
      let areaId = -1;
      const area = await this.areasDeTrabajoService.findOneByNameOrCreate(this.areaDeTrabajo);
        if (area != null) {
          areaId = area.id
        } else {
          this.areasDeTrabajoService.create(this.areaDeTrabajo);
          areaId = this.areasDeTrabajoService.findAll()[this.areasDeTrabajoService.areas.length-1].id+1;
        }
      this.empleadosService.create(this.nombre, this.fechaDeNacimiento, this.esDesarrollador, this.descripcion, areaId);
    } else {
      this.empleadosService.create(this.nombre, this.fechaDeNacimiento, this.esDesarrollador, this.descripcion);
    }

    this.nombre = "";
    this.fechaDeNacimiento = "1970-01-01";
    this.areaDeTrabajo = "";
    this.esDesarrollador = false;
    this.descripcion = "";
  }
}
