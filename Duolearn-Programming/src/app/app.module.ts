import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { ElegirLenguajeComponent } from './elegir-lenguaje/elegir-lenguaje.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PreloaderService } from './servicios/preloader.service';



import { PreguntasDosComponent } from './preguntas-dos/preguntas-dos.component';
import { PreguntasTresComponent } from './preguntas-tres/preguntas-tres.component';
import { PreguntasCuatroComponent } from './preguntas-cuatro/preguntas-cuatro.component';
import { PreguntasCincoComponent } from './preguntas-cinco/preguntas-cinco.component';


import { MapaPreguntasComponent } from './mapa-preguntas/mapa-preguntas.component';
import { OlvideContraseniaComponent } from './olvide-contrasenia/olvide-contrasenia.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CoronasComponent } from './coronas/coronas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ForoDiscusionComponent } from './foro-discusion/foro-discusion.component';
import { TeoriasComponent } from './teorias/teorias.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrincipalComponent,
    LoginComponent,
    PreLoaderComponent,
    ElegirLenguajeComponent,
    PreguntasComponent,
    InstruccionesComponent,
    PreguntasDosComponent,
    PreguntasTresComponent,
    PreguntasCuatroComponent,
    PreguntasCincoComponent,
    MapaPreguntasComponent,
    OlvideContraseniaComponent,
    PerfilUsuarioComponent,
    CoronasComponent,
    EstadisticasComponent,
    ForoDiscusionComponent,
    TeoriasComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module.forChild(),
    SweetAlert2Module,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
    ],
  providers: [
    PreloaderService,
    InstruccionesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
