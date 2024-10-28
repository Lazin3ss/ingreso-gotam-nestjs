import { Routes } from '@angular/router';
import { AreasDeTrabajoComponent } from './areasdetrabajo/areasdetrabajo.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'areasdetrabajo', component: AreasDeTrabajoComponent },
    { path: '**', component: PageNotFoundComponent }
];
