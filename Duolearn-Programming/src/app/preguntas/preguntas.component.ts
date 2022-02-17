import { OnInit, Component } from '@angular/core';
import { PreguntasService } from '../servicios/preguntas.service';
import { ElementRef, ViewChild } from '@angular/core';

import * as iconos from '@fortawesome/free-solid-svg-icons';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';

import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MapaPreguntasComponent } from '../mapa-preguntas/mapa-preguntas.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  Pregunta: any;
  @ViewChild("opcion1") public opcion1: ElementRef;
  @ViewChild("pregunta") public pregunta: ElementRef;
  @ViewChild("opcion2") public opcion2: ElementRef;
  @ViewChild("opcion3") public opcion3: ElementRef;
  @ViewChild("opcion4") public opcion4: ElementRef;
  private datos: ElementRef[];
  private salio: any[] = [];
  private opciones: any[];
  public static num_act: any;
  faQuestion = iconos.faQuestionCircle;
  private puntos = 20;
  valor: any;


  constructor(private pregservice: PreguntasService, public ruta: Router) {
    //this.datos = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];

  }

preg_aleatoria:any={};

  ngOnInit(): void {
    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      this.valor = sessionStorage.getItem("modulo");
      this.pregservice.get_questions({ modulo: sessionStorage.getItem("num_mod"), lenguaje: sessionStorage.getItem("lenguaje"), tipo: "CUESTIONARIO", usuario: sessionStorage.getItem("user") }).subscribe(respuesta => {
        //console.log(respuesta);
        this.Pregunta = respuesta;
        //console.log(this.Pregunta);
        let rnd = this.getRandomInt(0, this.Pregunta.length-1);
        console.log(rnd);
        this.preg_aleatoria=respuesta[rnd];
        this.cargar_elementos();
        console.log(this.preg_aleatoria);
        this.opciones = [this.preg_aleatoria.opcion_correcta, this.preg_aleatoria.opcion2, this.preg_aleatoria.opcion3, this.preg_aleatoria.opcion4]
        this.pregunta.nativeElement.innerText = this.preg_aleatoria.pregunta;
        for (let i = 0; i < 4; i++) {
          let rnd = this.getRandomInt(0, 3);
          let bol = true;
          for (let j = 0; j <= this.salio.length; j++) {
            if (this.salio[j] == rnd) {
              bol = false;
            }
          }
          if (bol) {
            this.datos[i].nativeElement.innerText = this.opciones[rnd];
            this.salio.push(rnd);
          } else {
            i--;
          }
        }
      });
    }

  }
  cargar_elementos() {
    this.datos = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];
  }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  jsongeneral: any = {};
  ver_verde() {
    if (this.estilo1.border == "5px solid green" || this.estilo2.border == "5px solid green" || this.estilo3.border == "5px solid green" || this.estilo4.border == "5px solid green") {
      console.log("avanza");
      //console.log(this.puntos);
      //sessionStorage.setItem("estadoactividad"+PreguntasComponent.num_act, "completa");
      //this.jsongeneral = JSON.parse(sessionStorage.getItem(sessionStorage.getItem("modulo")));
      //this.jsongeneral.porcentaje = this.jsongeneral.porcentaje + 10;
      //console.log(this.jsongeneral);
      //let json = this.crearjson2(PreguntasComponent.num_act);
      //this.jsongeneral = this.concatJSON(json);
      //sessionStorage.setItem(sessionStorage.getItem("modulo"), JSON.stringify(this.jsongeneral));
      this.enviar_respuesta();
      //console.log(JSON.parse(sessionStorage.getItem(MapaPreguntasComponent.mapa_modulo)));
      this.ruta.navigateByUrl("/mapa-preguntas");
      //enviar pregunta resuelta
    } else {
      console.log("no avanza");
    }
  }


  crearjson2(actividad: any) {
    switch (actividad) {
      case 1:
        return { estadoactividad1: "completa" }
      case 2:
        return { estadoactividad2: "completa" }
      case 3:
        return { estadoactividad3: "completa" }
      case 4:
        return { estadoactividad4: "completa" }
      case 5:
        return { estadoactividad5: "completa" }
      case 6:
        return { estadoactividad6: "completa" }
      case 7:
        return { estadoactividad7: "completa" }
      case 8:
        return { estadoactividad8: "completa" }
      case 9:
        return { estadoactividad9: "completa" }
      case 10:
        return { estadoactividad10: "completa" }
    }
  }

  estilo1: any = {};
  estilo2: any = {};
  estilo3: any = {};
  estilo4: any = {};


  comprueba(opcion: string) {
    let texto;
    switch (opcion) {
      case "opcion1":

        texto = this.opcion1.nativeElement.innerText;
        if (texto == this.Pregunta[0].opcion_correcta) {
          console.log("correcto");
          this.estilo1 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo2 = this.concatJSON2(this.estilo2);
          this.estilo3 = this.concatJSON2(this.estilo3);
          this.estilo4 = this.concatJSON2(this.estilo4);
        } else {
          console.log("incorrecto");
          this.estilo1 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
      case "opcion2":
        texto = this.opcion2.nativeElement.innerText;
        if (texto == this.Pregunta[0].opcion_correcta) {
          console.log("correcto");
          this.estilo2 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo1 = this.concatJSON2(this.estilo1);
          this.estilo3 = this.concatJSON2(this.estilo3);
          this.estilo4 = this.concatJSON2(this.estilo4);
        } else {
          console.log("incorrecto");
          this.estilo2 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
      case "opcion3":
        texto = this.opcion3.nativeElement.innerText;
        if (texto == this.Pregunta[0].opcion_correcta) {
          console.log("correcto");
          this.estilo3 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo2 = this.concatJSON2(this.estilo2);
          this.estilo1 = this.concatJSON2(this.estilo1);
          this.estilo4 = this.concatJSON2(this.estilo4);
        } else {
          console.log("incorrecto");
          this.estilo3 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
      case "opcion4":
        texto = this.opcion4.nativeElement.innerText;
        if (texto == this.Pregunta[0].opcion_correcta) {
          console.log("correcto");
          this.estilo4 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo2 = this.concatJSON2(this.estilo2);
          this.estilo3 = this.concatJSON2(this.estilo3);
          this.estilo1 = this.concatJSON2(this.estilo1);
        } else {
          console.log("incorrecto");
          this.estilo4 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
    }

  }

  concatJSON(obj2: any) {
    this.jsongeneral = Object.assign({}, this.jsongeneral, obj2);
    return this.jsongeneral;
  }

  abandonar() {
    this.ruta.navigateByUrl("/mapa-preguntas");
  }

  concatJSON2(estilo: any) {

    const estiloaux = { "pointer-events": "none" };
    const merge = Object.assign({}, estilo, estiloaux);
    return merge;
  }

  hoy = new Date();

  enviar_respuesta() {
    var fecha = this.hoy.getFullYear()+'-'+(this.hoy.getMonth() + 1) + '-'+this.hoy.getDate();
    this.pregservice.send_solves({ usuario: sessionStorage.getItem("user"), id_actividad: this.Pregunta[0].id, fecha: fecha, minutos: 5, intentos: 1, num_actividad: this.calc_num_act(), puntaje: this.puntos }).subscribe(resp => {
      console.log(resp);
    });
  }

  calc_num_act(): number {
    if (sessionStorage.getItem("num_mod") == "1") {
      return 0 + PreguntasComponent.num_act;
    }else if(sessionStorage.getItem("num_mod")=="2"){
      return 10+PreguntasComponent.num_act;
    }else if(sessionStorage.getItem("num_mod")=="3"){
      return 20+PreguntasComponent.num_act;
    }else if(sessionStorage.getItem("num_mod")=="4"){
      return 30+PreguntasComponent.num_act;
    }else if(sessionStorage.getItem("num_mod")=="5"){
      return 40+PreguntasComponent.num_act;
    }else if(sessionStorage.getItem("num_mod")=="6"){
      return 50+PreguntasComponent.num_act;
    }else if(sessionStorage.getItem("num_mod")=="7"){
      return 60+PreguntasComponent.num_act;
    }else if(sessionStorage.getItem("num_mod")=="8"){
      return 70+PreguntasComponent.num_act;
    }
  }


}