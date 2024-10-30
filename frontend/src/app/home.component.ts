import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="uk-padding">
        <h1 class="uk-h1">Bienvenido al administrador de empleados</h1>
        <p>Seleccione una de las opciones de arriba para continuar.</p>
    </div>`
})
export class HomeComponent {

}
