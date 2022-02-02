import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElegirLenguajeComponent } from './elegir-lenguaje/elegir-lenguaje.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"principal"},
  {path:"principal", component:PrincipalComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"registro", component:RegistroComponent},
  {path:"elegir-lenguaje", component:ElegirLenguajeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
