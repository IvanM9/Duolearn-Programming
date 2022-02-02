import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { RegistroComponent } from './registro/registro.component';
import { ElegirLenguajeComponent } from './elegir-lenguaje/elegir-lenguaje.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrincipalComponent,
    LoginComponent,
    PreLoaderComponent,
    RegistroComponent,
    ElegirLenguajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
