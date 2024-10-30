import { Component, Input } from "@angular/core";
import { AreaDeTrabajo } from "../../../types/areadetrabajo.type";
import { NgIf, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AreasDeTrabajoService } from "../../../services/areasdetrabajo.service";
import { EmpleadosService } from "../../../services/empleados.service";


@Component({
  imports: [NgIf, NgFor, FormsModule],
  selector: '[tablerow-item]',
  standalone: true,
  templateUrl: './table-row.component.html'
})

export class AreasDeTrabajoTableRowComponent {
  @Input() model!: AreaDeTrabajo;
  editing = false;

  constructor(
    private areasDeTrabajoService: AreasDeTrabajoService,
    private empleadosService: EmpleadosService
  ) {}

  // API methods
  getTotalEmployees() {
    return this.empleadosService.findAllByAreaDeTrabajoId(this.model.id).length;
  }

  deleteAreaDeTrabajo() {
    this.areasDeTrabajoService.delete(this.model.id);
  }

  // Edition Methods
  startEditMode() {
    this.editing = true;
  }

  endEditMode(submit: boolean) {
    this.editing = false;
    if (submit) {
      this.areasDeTrabajoService.update(this.model.id);
    }
  }
}