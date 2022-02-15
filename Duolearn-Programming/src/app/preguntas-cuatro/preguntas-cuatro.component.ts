import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { MapaPreguntasComponent } from '../mapa-preguntas/mapa-preguntas.component';

import { PreguntasService } from '../servicios/preguntas.service';


@Component({
  selector: 'app-preguntas-cuatro',
  templateUrl: './preguntas-cuatro.component.html',
  styleUrls: ['./preguntas-cuatro.component.css']
})
export class PreguntasCuatroComponent implements AfterViewInit {

  @ViewChild("opcion1") public opcion1: ElementRef;
  @ViewChild("opcion2") public opcion2: ElementRef;
  @ViewChild("opcion3") public opcion3: ElementRef;
  @ViewChild("opcion4") public opcion4: ElementRef;
  @ViewChild("pregunta1") public preg1: ElementRef;
  @ViewChild("pregunta2") public preg2: ElementRef;
  @ViewChild("pregunta3") public preg3: ElementRef;
  @ViewChild("pregunta4") public preg4: ElementRef;
  //combobox
  @ViewChild("escogio4") public esc4: ElementRef;
  @ViewChild("escogio3") public esc3: ElementRef;
  @ViewChild("escogio2") public esc2: ElementRef;
  @ViewChild("escogio1") public esc1: ElementRef;



  public static numact: any;
  datos: any[][] = [];
  pregunta: any;
  pregs_Salieron: number[] = [];
  total_correctas: number = 0;


  opcs: any[] = [];
  esc: any[] = [];
  salio: any[] = [];
  pregs: any[] = [];

  faQuestion = iconos.faQuestionCircle;

  constructor(private pregservice: PreguntasService, public ruta: Router) { }

  ngAfterViewInit(): void {
    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      this.pregservice.get_questions({ "actividad": "CUESTIONARIO" }).subscribe(resp => {
        this.pregunta = resp;
        console.log(resp);
        let aleatorios: any[] = [];
        for (let index = 0; index < 4; index++) {
          let rand = this.getRandomInt(0, this.pregunta.length - 1);
          let bol = false;
          for (let j = 0; j < aleatorios.length; j++) {
            if (rand == aleatorios[j]["id"] - 1) {
              bol = true;
              break;
            }
          }
          if (bol) {
            index--;
          } else {
            aleatorios.push(resp[rand]);
          }
        }
        console.log(aleatorios);
        this.opcs = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];
        this.pregs = [this.preg1, this.preg2, this.preg3, this.preg4];
        this.esc = [this.esc1, this.esc2, this.esc3, this.esc4];
        for (let i = 0; i < 4; i++) {
          let rnd = this.getRandomInt(0, 3);
          let bol = true;
          for (let j = 0; j <= this.salio.length; j++) {
            if (this.salio[j] == rnd) {
              bol = false;
            }
          }
          if (bol) {
            this.pregs[i].nativeElement.innerText = aleatorios[rnd]["pregunta"];
            this.salio.push(rnd);
          } else {
            i--;
          }
        }
        this.salio = [];
        for (let i = 0; i < 4; i++) {
          let rnd = this.getRandomInt(0, 3);
          let bol = true;
          for (let j = 0; j <= this.salio.length; j++) {
            if (this.salio[j] == rnd) {
              bol = false;
            }
          }
          if (bol) {
            this.opcs[i].nativeElement.innerText = aleatorios[rnd]["opcion_correcta"];
            this.salio.push(rnd);
          } else {
            i--;
          }
        }
      });
    }

  }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  jsongeneral: any = {};

  abandonar() {
    this.ruta.navigateByUrl("/mapa-preguntas");
  }

  private respuestas: string[] = [];
  comprueba() {
    this.respuestas = [];
    for (let index = 0; index < 4; index++) {
      let a = this.retornaselect(this.esc[index].nativeElement.options.selectedIndex, this.esc[index]);
      for (let j = 0; j < 4; j++) {
        if (this.pregs[index].nativeElement.innerText == this.pregunta[j].pregunta) {
          let b = this.pregunta[j];
          if (a == b.opcion_correcta) {
            console.log("correcto");
            this.respuestas.push("correcta");
            this.total_correctas++;
          } else {
            console.log("incorrecto");
            this.respuestas.push("incorrecta");

          }
        }
      }
    }


    this.jsongeneral = JSON.parse(sessionStorage.getItem(sessionStorage.getItem("modulo")));
    this.jsongeneral.porcentaje = this.jsongeneral.porcentaje + 10;
    console.log(this.jsongeneral);
    let json = this.crearjson2(PreguntasCuatroComponent.numact);
    this.jsongeneral = this.concatJSON(json);
    sessionStorage.setItem(sessionStorage.getItem("modulo"), JSON.stringify(this.jsongeneral));
    this.poner_estilos();
    setTimeout(() => {
      this.ruta.navigateByUrl("/mapa-preguntas");
    }, 3000);
  }

  estilo1: any;
  estilo2: any;
  estilo3: any;
  estilo4: any;

  poner_estilos() {
    if (this.respuestas[0] == "correcta") {
      this.estilo1 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      this.estilo1 = { 'border': '5px solid red', "pointer-events": "none" };
    }
    if (this.respuestas[1] == "correcta") {
      this.estilo2 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      this.estilo2 = { 'border': '5px solid red', "pointer-events": "none" };
    }
    if (this.respuestas[2] == "correcta") {
      this.estilo3 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      this.estilo3 = { 'border': '5px solid red', "pointer-events": "none" };
    }
    if (this.respuestas[3] == "correcta") {
      this.estilo4 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      this.estilo4 = { 'border': '5px solid red', "pointer-events": "none" };
    }
  }

  concatJSON(obj2: any) {
    this.jsongeneral = Object.assign({}, this.jsongeneral, obj2);
    return this.jsongeneral;
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

  retornaselect(index: number, select: ElementRef): string {
    return select.nativeElement.options[index].innerText;
  }



}
