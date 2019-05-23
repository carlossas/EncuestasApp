import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { InicioComponent } from './encuesta/inicio/inicio.component';
import { PreguntasComponent } from './encuesta/preguntas/preguntas.component';
import { EmpleadosComponent } from './encuesta/empleados/empleados.component';
import { AgradecimientoComponent } from './encuesta/agradecimiento/agradecimiento.component';
import { SucursalesComponent } from './encuesta/sucursales/sucursales.component';
SucursalesComponent


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'agradecimiento', component: AgradecimientoComponent },
  { path: 'sucursales', component: SucursalesComponent },

  { path: '**', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
