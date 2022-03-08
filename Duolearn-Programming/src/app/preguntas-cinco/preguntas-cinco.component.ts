import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { PreguntasComponent } from '../preguntas/preguntas.component';
import { PreguntasService } from '../servicios/preguntas.service';

@Component({
  selector: 'app-preguntas-cinco',
  templateUrl: './preguntas-cinco.component.html',
  styleUrls: ['./preguntas-cinco.component.css']
})
export class PreguntasCincoComponent implements AfterViewInit {

  preg_aleatoria: any = {};
  private datos: ElementRef[];
  private salio: any[] = [];
  private opciones: any[];
  public static num_act: any;
  Pregunta: any;
  puntos = 20;
  valor: any;
  tiempo: number;

  //estilos opciones
  estilo1: any = {};
  estilo2: any = {};
  estilo3: any = {};
  estilo4: any = {};

  @ViewChild("opcion1") public opcion1: ElementRef;
  @ViewChild("pregunta") public pregunta: ElementRef;
  @ViewChild("opcion2") public opcion2: ElementRef;
  @ViewChild("opcion3") public opcion3: ElementRef;
  @ViewChild("opcion4") public opcion4: ElementRef;
  @ViewChild("tiempo") public cronometro: ElementRef;

  faQuestion = iconos.faQuestionCircle;
  constructor(public ruta: Router, private pregservice: PreguntasService) { }

  ngAfterViewInit(): void {
    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      this.valor = sessionStorage.getItem("modulo");
      this.pregservice.get_questions({ modulo: sessionStorage.getItem("num_mod"), lenguaje: sessionStorage.getItem("lenguaje"), tipo: "encontrar-error", usuario: sessionStorage.getItem("user") }).subscribe(respuesta => {
        //console.log(respuesta);
        this.startTimer();
        this.Pregunta = respuesta;
        //console.log(this.Pregunta);
        let rnd = this.getRandomInt(0, this.Pregunta.length - 1);
        //console.log(rnd);
        this.preg_aleatoria = respuesta[rnd];
        this.cargar_elementos();
        //console.log(this.preg_aleatoria);
        this.opciones = [this.preg_aleatoria.opcion_correcta, this.preg_aleatoria.opcion2, this.preg_aleatoria.opcion3, this.preg_aleatoria.opcion4]
        this.pregunta.nativeElement.src = this.preg_aleatoria.pregunta;
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

  concatJSON2(estilo: any) {

    const estiloaux = { "pointer-events": "none" };
    const merge = Object.assign({}, estilo, estiloaux);
    return merge;
  }

  comprueba(opcion: string) {
    let texto;
    switch (opcion) {
      case "opcion1":
        texto = this.opcion1.nativeElement.innerText;
        if (texto == this.preg_aleatoria.opcion_correcta.trim()) {
          //console.log("correcto");
          this.estilo1 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo2 = this.concatJSON2(this.estilo2);
          this.estilo3 = this.concatJSON2(this.estilo3);
          this.estilo4 = this.concatJSON2(this.estilo4);
          this.pauseTimer();
        } else {
          //console.log("incorrecto");
          this.estilo1 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
      case "opcion2":
        texto = this.opcion2.nativeElement.innerText;
        if (texto == this.preg_aleatoria.opcion_correcta.trim()) {
          //console.log("correcto");
          this.pauseTimer();
          this.estilo2 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo1 = this.concatJSON2(this.estilo1);
          this.estilo3 = this.concatJSON2(this.estilo3);
          this.estilo4 = this.concatJSON2(this.estilo4);
        } else {
          //console.log("incorrecto");
          this.estilo2 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
      case "opcion3":
        texto = this.opcion3.nativeElement.innerText;
        if (texto == this.preg_aleatoria.opcion_correcta.trim()) {
          //console.log("correcto");
          this.pauseTimer();
          this.estilo3 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo2 = this.concatJSON2(this.estilo2);
          this.estilo1 = this.concatJSON2(this.estilo1);
          this.estilo4 = this.concatJSON2(this.estilo4);
        } else {
          //console.log("incorrecto");
          this.estilo3 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
      case "opcion4":
        texto = this.opcion4.nativeElement.innerText;
        if (texto == this.preg_aleatoria.opcion_correcta.trim()) {
          //console.log("correcto");
          this.pauseTimer();
          this.estilo4 = { 'border': '5px solid green', "pointer-events": "none" };
          this.estilo2 = this.concatJSON2(this.estilo2);
          this.estilo3 = this.concatJSON2(this.estilo3);
          this.estilo1 = this.concatJSON2(this.estilo1);
        } else {
          //console.log("incorrecto");
          this.estilo4 = { 'border': '5px solid red', "pointer-events": "none" };
          this.puntos -= 5;
        }
        break;
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

  //enviar respuesta
  hoy = new Date();

  enviar_respuesta() {
    this.pauseTimer();
    if (this.min = "00") {
      this.tiempo = 1;
    } else {
      this.tiempo = Number.parseInt(this.min);
    }
    var fecha = this.hoy.getFullYear() + '-' + (this.hoy.getMonth() + 1) + '-' + this.hoy.getDate();
    this.pregservice.send_solves({ usuario: sessionStorage.getItem("user"), id_actividad: this.Pregunta[0].id, fecha: fecha, minutos: this.tiempo, intentos: 1, num_actividad: this.calc_num_act(), puntaje: this.puntos }).subscribe(resp => {
      //console.log(resp);
    });
  }

  //comprueba que eligio algo
  ver_verde() {
    if (this.estilo1.border == "5px solid green" || this.estilo2.border == "5px solid green" || this.estilo3.border == "5px solid green" || this.estilo4.border == "5px solid green") {
      //console.log("avanza");
      this.enviar_respuesta();
      this.ruta.navigateByUrl('/mapa-preguntas', {
        skipLocationChange: true
      }).then(() =>
        this.ruta.navigate([PreguntasCincoComponent])
      );
    } else {
      //console.log("no avanza");
    }
  }

  abandonar() {
    this.pauseTimer();
    this.ruta.navigateByUrl("/mapa-preguntas");
  }

  play = false;
  //cronometro
  time: string = '00';
  min: string = '00';

  interval;

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
