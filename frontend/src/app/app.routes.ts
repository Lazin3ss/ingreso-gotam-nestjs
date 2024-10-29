import { Routes } from '@angular/router';
import { AreasDeTrabajoComponent } from './components/areasdetrabajo/areasdetrabajo.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'areasdetrabajo', component: AreasDeTrabajoComponent },
    { path: '**', component: PageNotFoundComponent }
];
