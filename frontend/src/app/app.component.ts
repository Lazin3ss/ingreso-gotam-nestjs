import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgregarEmpleadoFormComponent } from './agregar-empleado-form/agregar-empleado-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgregarEmpleadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ingreso-gotam-angular';
}
