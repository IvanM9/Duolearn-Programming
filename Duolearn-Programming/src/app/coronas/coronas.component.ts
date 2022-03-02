import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { EstadisticasService } from '../servicios/estadisticas.service';


@Component({
  selector: 'app-coronas',
  templateUrl: './coronas.component.html',
  styleUrls: ['./coronas.component.css']
})
export class CoronasComponent implements OnInit {

  facrown = iconos.faCrown;
  json_general;

  //coronas

  coronas_tiene=0;
  coronas_totales=8;
  coronas_faltan;


  constructor(
    public estadisticas_serv: EstadisticasService
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("lenguaje") == "java") {
      this.estadisticas_serv.obtener_est_java({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
        this.json_general = resp;
        this.coronas();
        this.coronas_faltan=this.coronas_totales-this.coronas_tiene;
      });
    }
    else if (sessionStorage.getItem("lenguaje") == "csh") {
      this.estadisticas_serv.obtener_est_csh({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
        this.json_general = resp;
        this.coronas();
        this.coronas_faltan=this.coronas_totales-this.coronas_tiene;
      });
    }
  }

  coronas() {
    let contador = 0;
    for (let index = 0; index < 10; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

    contador = 0;
    for (let index = 10; index < 20; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

    contador = 0;
    for (let index = 20; index < 30; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

    contador = 0;
    for (let index = 30; index < 40; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

    contador = 0;
    for (let index = 40; index < 50; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

    contador = 0;
    for (let index = 50; index < 60; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

    contador = 0;
    for (let index = 60; index < 70; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

    contador = 0;
    for (let index = 70; index < 80; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        contador++
      }
    }
    if (contador == 10) {
      this.coronas_tiene += 1;
    }

  }

}
