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
import { PreloaderResolver } from './resolvers/preloader.resolver';
import { PreloaderService } from './servicios/preloader.service';
import { LoginResolver } from './resolvers/login.resolver';
import { PreguntasDosComponent } from './preguntas-dos/preguntas-dos.component';
import { PreguntasTresComponent } from './preguntas-tres/preguntas-tres.component';
import { PreguntasCuatroComponent } from './preguntas-cuatro/preguntas-cuatro.component';
import { PreguntasCincoComponent } from './preguntas-cinco/preguntas-cinco.component';

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
    PreguntasCincoComponent
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
    PreloaderResolver,
    LoginResolver,
    InstruccionesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
