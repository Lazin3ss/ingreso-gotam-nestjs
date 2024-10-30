import { Component } from '@angular/core';
import { AreasDeTrabajoService } from '../../../services/areasdetrabajo.service';
import { NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-areadetrabajo-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: 'areadetrabajo-form.component.html'
})
export class AreaDeTrabajoFormComponent {
  constructor(private areasDeTrabajoService: AreasDeTrabajoService) {}
  nombre = "";

  onSubmit() {
    this.areasDeTrabajoService.create(this.nombre);
    this.nombre = "";
  }
}
