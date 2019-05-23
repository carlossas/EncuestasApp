import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Servicios
import { PreguntasService } from './services/preguntas.service';
import { UiService } from './services/ui.service';
import { UtilidadesService } from './services/utilidades.service';


//Componentes

import { PreguntasComponent } from './encuesta/preguntas/preguntas.component';
import { InicioComponent } from './encuesta/inicio/inicio.component';
import { EmpleadosComponent } from './encuesta/empleados/empleados.component';
import { AgradecimientoComponent } from './encuesta/agradecimiento/agradecimiento.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SucursalesComponent } from './encuesta/sucursales/sucursales.component';




@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    InicioComponent,
    EmpleadosComponent,
    AgradecimientoComponent,
    MenuComponent,
    FooterComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PreguntasService,
    UiService,
    UtilidadesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
