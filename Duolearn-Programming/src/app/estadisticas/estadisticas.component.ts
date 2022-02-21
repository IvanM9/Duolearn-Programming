import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EstadisticasService } from '../servicios/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  fachart = iconos.faChartBar;
  constructor(public estadisticas_serv: EstadisticasService) { }

  p1: any = 0;
  p2: any = 0;
  p3: any = 0;
  p4: any = 0;
  p5: any = 0;
  p6: any = 0;
  p7: any = 0;
  p8: any = 0;
  json_general: any = {};
  bol = true;

  ngOnInit(): void {

    if (sessionStorage.getItem("lenguaje") == "java") {
      this.estadisticas_serv.obtener_est_java({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
        this.json_general = resp;
        //console.log(this.json_general);
        this.porcentaje();
        this.asignaporcentajes();
      });
    } else if (sessionStorage.getItem("lenguaje") == "csh") {
      this.estadisticas_serv.obtener_est_csh({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
        this.json_general = resp;
        //console.log(this.json_general);
        this.porcentaje();
        this.asignaporcentajes();
      });
    }
  }

  porcentaje() {
    DashboardComponent.porcentaje_mod1 = 0;
    DashboardComponent.porcentaje_mod2 = 0;
    DashboardComponent.porcentaje_mod3 = 0;
    DashboardComponent.porcentaje_mod4 = 0;
    DashboardComponent.porcentaje_mod5 = 0;
    DashboardComponent.porcentaje_mod6 = 0;
    DashboardComponent.porcentaje_mod7 = 0;
    DashboardComponent.porcentaje_mod8 = 0;
    for (let index = 0; index < 10; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod1 += 10;
      }
    }

    for (let index = 10; index < 20; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod2 += 10;
      }
    }

    for (let index = 20; index < 30; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod3 += 10;
      }
    }

    for (let index = 30; index < 40; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod4 += 10;
      }
    }

    for (let index = 40; index < 50; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod5 += 10;
      }
    }

    for (let index = 50; index < 60; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod6 += 10;
      }
    }

    for (let index = 60; index < 70; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod7 += 10;
      }
    }

    for (let index = 70; index < 80; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod8 += 10;
      }
    }
  }

  asignaporcentajes() {
    this.p1 = DashboardComponent.porcentaje_mod1;
    this.p2 = DashboardComponent.porcentaje_mod2;
    this.p3 = DashboardComponent.porcentaje_mod3;
    this.p4 = DashboardComponent.porcentaje_mod4;
    this.p5 = DashboardComponent.porcentaje_mod5;
    this.p6 = DashboardComponent.porcentaje_mod6;
    this.p7 = DashboardComponent.porcentaje_mod7;
    this.p8 = DashboardComponent.porcentaje_mod8;
  }

}
