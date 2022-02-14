import { R3BoundTarget } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
import { PreguntasCuatroComponent } from '../preguntas-cuatro/preguntas-cuatro.component';
import { PreguntasComponent } from '../preguntas/preguntas.component';

@Component({
  selector: 'app-mapa-preguntas',
  templateUrl: './mapa-preguntas.component.html',
  styleUrls: ['./mapa-preguntas.component.css']
})
export class MapaPreguntasComponent implements AfterViewInit {

  faVisto = iconos.faCheckCircle;
  public static mapa_modulo: any;
  @ViewChild("preg1") public preg1: ElementRef;
  @ViewChild("preg2") public preg2: ElementRef;
  @ViewChild("preg3") public preg3: ElementRef;
  @ViewChild("preg4") public preg4: ElementRef;
  @ViewChild("preg5") public preg5: ElementRef;
  @ViewChild("preg6") public preg6: ElementRef;
  @ViewChild("preg7") public preg7: ElementRef;
  @ViewChild("preg8") public preg8: ElementRef;
  @ViewChild("preg9") public preg9: ElementRef;
  @ViewChild("preg10") public preg10: ElementRef;

  //estilos letras

  estado1: any = { 'color': 'transparent' };
  estado2: any = { 'color': 'transparent' };
  estado3: any = { 'color': 'transparent' };
  estado4: any = { 'color': 'transparent' };
  estado5: any = { 'color': 'transparent' };
  estado6: any = { 'color': 'transparent' };
  estado7: any = { 'color': 'transparent' };
  estado8: any = { 'color': 'transparent' };
  estado9: any = { 'color': 'transparent' };
  estado10: any = { 'color': 'transparent' };

  //estilos botones
  estilo1: any;
  estilo2: any;
  estilo3: any;
  estilo4: any;
  estilo5: any;
  estilo6: any;
  estilo7: any;
  estilo8: any;
  estilo9: any;
  estilo10: any;



  valor: any;
  actividades_rutas: any[] = ["/preguntas", "/preguntas-cuatro"];
  constructor(public ruta: Router) { }

  ngAfterViewInit(): void {
    //sessionStorage.clear();
    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      MapaPreguntasComponent.mapa_modulo = DashboardComponent.modulo_select;
      this.valor = sessionStorage.getItem("modulo");
      this.json_general = JSON.parse(sessionStorage.getItem(sessionStorage.getItem("modulo")));
      if (this.json_general.porcentaje == 100) {
        this.ruta.navigateByUrl("/dashboard");
      }
      else {
        if (this.json_general.estadoactividad1 == "completa") {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.estadoactividad2 == "completa") {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad3 == "completa") {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad4 == "completa") {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad5 == "completa") {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad6 == "completa") {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad7 == "completa") {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad8 == "completa") {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad9 == "completa") {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.estadoactividad10 == "completa") {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
      }
    }
  }

  random: any;
  actividades(actividad: any) {
    this.random = this.getRandomInt(0, this.actividades_rutas.length - 1);
    if (this.random == 0) {
      PreguntasComponent.num_act = actividad;
      return "act1";
    } else {
      PreguntasCuatroComponent.numact = actividad;
      return "act2";
    }
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  json_general: any = {};
  hacer_act(actividad: any) {

    let json1 = this.crearjson1(actividad, this.actividades(actividad));
    sessionStorage.setItem(sessionStorage.getItem("modulo"), JSON.stringify(this.concatJSON(json1)));
    let json2 = this.crearjson2(actividad);
    sessionStorage.setItem(sessionStorage.getItem("modulo"), JSON.stringify(this.concatJSON(json2)));
    let json3 = {};
    if (this.json_general.porcentaje == null) {
      json3 = this.crearjson3();
    } else {
      json3 = this.json_general.porcentaje;
    }
    sessionStorage.setItem(sessionStorage.getItem("modulo"), JSON.stringify(this.concatJSON(json3)));
    console.log(JSON.parse(sessionStorage.getItem(sessionStorage.getItem("modulo"))));
    this.ruta.navigateByUrl(this.actividades_rutas[this.random]);

  }

  concatJSON(obj2: any) {
    this.json_general = Object.assign({}, this.json_general, obj2);
    return this.json_general;
  }

  crearjson1(actividad: any, act: any) {
    switch (actividad) {
      case 1:
        return { actividad1: act }
      case 2:
        return { actividad2: act }
      case 3:
        return { actividad3: act }
      case 4:
        return { actividad4: act }
      case 5:
        return { actividad5: act }
      case 6:
        return { actividad6: act }
      case 7:
        return { actividad7: act }
      case 8:
        return { actividad8: act }
      case 9:
        return { actividad9: act }
      case 10:
        return { actividad10: act }
    }
  }

  crearjson2(actividad: any) {
    switch (actividad) {
      case 1:
        return { estadoactividad1: "incompleto" }
      case 2:
        return { estadoactividad2: "incompleto" }
      case 3:
        return { estadoactividad3: "incompleto" }
      case 4:
        return { estadoactividad4: "incompleto" }
      case 5:
        return { estadoactividad5: "incompleto" }
      case 6:
        return { estadoactividad6: "incompleto" }
      case 7:
        return { estadoactividad7: "incompleto" }
      case 8:
        return { estadoactividad8: "incompleto" }
      case 9:
        return { estadoactividad9: "incompleto" }
      case 10:
        return { estadoactividad10: "incompleto" }
    }
  }
  crearjson3() {
    return { porcentaje: 0 };
  }
}
