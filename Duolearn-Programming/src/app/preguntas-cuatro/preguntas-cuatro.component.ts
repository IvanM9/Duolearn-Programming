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
  tiempo: number;

  opcs: any[] = [];
  esc: any[] = [];
  salio: any[] = [];
  pregs: any[] = [];

  faQuestion = iconos.faQuestionCircle;
  aleatorios: any[] = [];

  constructor(private pregservice: PreguntasService, public ruta: Router) { }

  ngAfterViewInit(): void {
    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      this.pregservice.get_questions({ modulo: sessionStorage.getItem("num_mod"), lenguaje: sessionStorage.getItem("lenguaje"), tipo: "cuestionario", usuario: sessionStorage.getItem("user") }).subscribe(resp => {
        this.pregunta = resp;
        //console.log(resp);
        this.startTimer();
        if (resp.length >= 4) {
          for (let index = 0; index < 4; index++) {
            let rand = this.getRandomInt(0, this.pregunta.length - 1);
            let bol = false;
            for (let j = 0; j < this.aleatorios.length; j++) {
              if (resp[rand]["id"] == this.aleatorios[j]["id"]) {
                bol = true;
                break;
              }
            }
            if (bol) {
              index--;
            } else {
              this.aleatorios.push(resp[rand]);
            }
          }
          //console.log(this.aleatorios);
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
              this.pregs[i].nativeElement.innerText = this.aleatorios[rnd]["pregunta"];
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
              this.opcs[i].nativeElement.innerText = this.aleatorios[rnd]["opcion_correcta"];
              this.salio.push(rnd);
            } else {
              i--;
            }
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
  puntos = 5;

  comprueba() {
    this.respuestas = [];
    for (let index = 0; index < 4; index++) {
      let a = this.retornaselect(this.esc[index].nativeElement.options.selectedIndex, this.esc[index]);
      for (let j = 0; j < 4; j++) {
        if (this.pregs[index].nativeElement.innerText == this.aleatorios[j].pregunta) {
          let b = this.aleatorios[j];
          if (a == b.opcion_correcta) {
            //console.log("correcto");
            if (this.puntos != 20) {
              this.puntos += 5;
            }
            this.respuestas.push("correcta");
            this.total_correctas++;
          } else {
            //console.log("incorrecto");
            this.respuestas.push("incorrecta");

          }
        }
      }
    }
    this.enviar_respuesta();
    this.poner_estilos();
    setTimeout(() => {
      this.ruta.navigateByUrl('/mapa-preguntas', {
        skipLocationChange: true
      }).then(() =>
        this.ruta.navigate([PreguntasCuatroComponent])
      );
    }, 3000);
  }

  hoy = new Date();
  enviar_respuesta() {
    this.pauseTimer();
    if(this.min="00"){
      this.tiempo=1;
    }else{
      this.tiempo=Number.parseInt(this.min);
    }
    for (let index = 0; index < 4; index++) {
      var fecha = this.hoy.getFullYear() + '-' + (this.hoy.getMonth() + 1) + '-' + this.hoy.getDate();
      this.pregservice.send_solves({ usuario: sessionStorage.getItem("user"), id_actividad: this.aleatorios[index].id, fecha: fecha, minutos: 5, intentos: 1, num_actividad: this.calc_num_act(), puntaje: this.puntos }).subscribe(resp => {
        //console.log(resp);
      });
    }
  }

  calc_num_act(): number {
    if (sessionStorage.getItem("num_mod") == "1") {
      return 0 + Number.parseInt(sessionStorage.getItem("num_act"));
    } else if (sessionStorage.getItem("num_mod") == "2") {
      return 10 + Number.parseInt(sessionStorage.getItem("num_act"));
    } else if (sessionStorage.getItem("num_mod") == "3") {
      return 20 + Number.parseInt(sessionStorage.getItem("num_act"));
    } else if (sessionStorage.getItem("num_mod") == "4") {
      return 30 + Number.parseInt(sessionStorage.getItem("num_act"));
    } else if (sessionStorage.getItem("num_mod") == "5") {
      return 40 + Number.parseInt(sessionStorage.getItem("num_act"));
    } else if (sessionStorage.getItem("num_mod") == "6") {
      return 50 + Number.parseInt(sessionStorage.getItem("num_act"));
    } else if (sessionStorage.getItem("num_mod") == "7") {
      return 60 + Number.parseInt(sessionStorage.getItem("num_act"));
    } else if (sessionStorage.getItem("num_mod") == "8") {
      return 70 + Number.parseInt(sessionStorage.getItem("num_act"));
    }
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

  //cronometro
  time: string = '00';
  min: string = '00';
  interval;
  play = false;

  startTimer() {
    this.play = true;
    this.interval = setInterval(() => {
      let seg = Number.parseInt(this.time);
      seg++;
      if (seg < 10) {
        this.time = '0' + seg;
      } else {
        this.time = seg.toString();
      }
      if (this.time == '60') {
        this.time = '00';
        let m = Number.parseInt(this.min);
        m++;
        if (m < 10) {
          this.min = '0' + m;
        } else {
          this.min = m.toString();
        }
      }
    }, 1000)
  }

  pauseTimer() {
    this.play = false;
    clearInterval(this.interval);
  }

}
