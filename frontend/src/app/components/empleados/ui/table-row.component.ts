import { Component, Input } from "@angular/core";
import { NgIf, NgFor, NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AreasDeTrabajoService } from "../../../services/areasdetrabajo.service";
import { EmpleadosService } from "../../../services/empleados.service";
import { Empleado } from "../../../types/empleado.type";


@Component({
  imports: [NgClass, NgIf, NgFor, FormsModule],
  selector: '[tablerow-item]',
  standalone: true,
  templateUrl: './table-row.component.html'
})

export class EmpleadosTableRowComponent {
  @Input() model!: Empleado;
  editing = false;

  constructor(
    private areasDeTrabajoService: AreasDeTrabajoService,
    private empleadosService: EmpleadosService
  ) {}

  // API methods
  deleteEmpleado() {
    this.empleadosService.delete(this.model.id);
  }

  getAllAreasDeTrabajo() {
    return this.areasDeTrabajoService.findAll();
  }

  // Data sanitization methods
  sanitizeBirthdate() {
    this.model.fechaDeNacimiento = this.model.fechaDeNacimiento.replace(/(T)+(.)*$/g, '');
  }

  sanitizeDatestring(date: Date) {
    if (date != null) {
      return date.toString().replace(/([T])+|(\.(\d)*Z)/g, ' ');
    }
    return "";
  }

  sanitizeDesarrolladorBoolean() {
    if (this.model.esDesarrollador) {
      return "Desarrollador";
    } else {
      return "Común";
    }
  }

  getAreaNameFromId() {
    const area = this.areasDeTrabajoService.findOne(this.model.areaDeTrabajoId);
    if (area != null) {
      this.model.areaDeTrabajoNombre = area.nombre;
    } else {
      this.model.areaDeTrabajoNombre = "";
    }
    return this.model.areaDeTrabajoNombre;
  }

  convertBirthdateToAge() {
    this.sanitizeBirthdate();
    let timeDiff = Math.abs(Date.now() - new Date(this.model.fechaDeNacimiento).getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

  // Edition Methods
  startEditMode() {
    this.editing = true;
  }

  async endEditMode(submit: boolean) {
    this.editing = false;
    if (submit) {
      const area = await this.areasDeTrabajoService.findOneByNameOrCreate(this.model.areaDeTrabajoNombre);
      if (area != null) {
        this.model.areaDeTrabajoId = area.id;
        this.model.areaDeTrabajoNombre = area.nombre;
      }
      this.empleadosService.update(this.model.id);
    }
  }

  hola() {
    console.log("hola");
  }
}