import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { PreguntasComponent } from '../preguntas/preguntas.component';
import { PreguntasService } from '../servicios/preguntas.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-preguntas-tres',
  templateUrl: './preguntas-tres.component.html',
  styleUrls: ['./preguntas-tres.component.css']
})
export class PreguntasTresComponent implements AfterViewInit {

  @ViewChild("opcion1") public opcion1: ElementRef;
  @ViewChild("opcion2") public opcion2: ElementRef;
  @ViewChild("opcion3") public opcion3: ElementRef;
  @ViewChild("opcion4") public opcion4: ElementRef;
  @ViewChild("texto1") public texto1: ElementRef;
  @ViewChild("texto2") public texto2: ElementRef;
  @ViewChild("texto3") public texto3: ElementRef;
  @ViewChild("texto4") public texto4: ElementRef;

  estilo1: any;
  estilo2: any;
  estilo3: any;
  estilo4: any;

  public linea1: any;
  public linea2: any;
  public linea3: any;
  public linea4: any;

  opciones: any[] = [];
  private salio: any[] = [];
  valor: any;
  puntos = 20;
  preg_aleatoria;
  private datos: ElementRef[];
  tiempo: number;

  faQuestion = iconos.faQuestionCircle;

  constructor(private pregservice: PreguntasService, public ruta: Router) { }

  ngAfterViewInit(): void {
    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      this.valor = sessionStorage.getItem("modulo");
      this.pregservice.get_questions({ modulo: sessionStorage.getItem("num_mod"), lenguaje: sessionStorage.getItem("lenguaje"), tipo: "drag-and-drop", usuario: sessionStorage.getItem("user") }).subscribe(resp => {
        //console.log(resp);
        this.startTimer();
        let rnd = this.getRandomInt(0, resp.length - 1);
        //console.log(rnd);
        this.preg_aleatoria = resp[rnd];
        let lineas = this.preg_aleatoria.pregunta.split("\n");
        this.linea1 = lineas[0];
        this.linea2 = lineas[1];
        this.linea3 = lineas[2];
        this.linea4 = lineas[3];
        this.datos = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];
        this.opciones = [this.preg_aleatoria.opcion_correcta, this.preg_aleatoria.opcion2, this.preg_aleatoria.opcion3, this.preg_aleatoria.opcion4]
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
        //console.log(lineas);
      });
    }
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  comprueba() {
    if (this.texto1.nativeElement.outerText == this.preg_aleatoria.opcion_correcta) {
      //console.log("DYD 1 CORRECTO");
      this.estilo1 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      //console.log("DYD 1 INCORRECTO");
      this.estilo1 = { 'border': '5px solid red', "pointer-events": "none" };
      if (this.puntos > 5) {
        this.puntos -= 5;
      }
    }
    if (this.texto2.nativeElement.outerText == this.preg_aleatoria.opcion2) {
      //console.log("DYD 1 CORRECTO");
      this.estilo2 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      //console.log("DYD 2 INCORRECTO");
      this.estilo2 = { 'border': '5px solid red', "pointer-events": "none" };
      if (this.puntos > 5) {
        this.puntos -= 5;
      }
    }
    if (this.texto3.nativeElement.outerText == this.preg_aleatoria.opcion3) {
      //console.log("DYD 3 CORRECTO");
      this.estilo3 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      //console.log("DYD 3 INCORRECTO");
      this.estilo3 = { 'border': '5px solid red', "pointer-events": "none" };
      if (this.puntos > 5) {
        this.puntos -= 5;
      }
    }
    if (this.texto4.nativeElement.outerText == this.preg_aleatoria.opcion4) {
      //console.log("DYD 4 CORRECTO");
      this.estilo4 = { 'border': '5px solid green', "pointer-events": "none" };
    } else {
      //console.log("DYD 4 INCORRECTO");
      this.estilo4 = { 'border': '5px solid red', "pointer-events": "none" };
      if (this.puntos > 5) {
        this.puntos -= 5;
      }
    }
    this.pauseTimer();
    if (this.min = "00") {
      this.tiempo = 1;
    } else {
      this.tiempo = Number.parseInt(this.min);
    }
    this.enviar_respuesta();
    setTimeout(() => {
      this.ruta.navigateByUrl('/mapa-preguntas', {
        skipLocationChange: true
      }).then(() =>
        this.ruta.navigate([PreguntasTresComponent])
      );
    }, 3000);
  }
  elemn: any;

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //console.log("entra " + this.elemn + "en el " + ev.target.id);
    ev.target.appendChild(document.getElementById(this.elemn));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    this.elemn = ev.target.id;
    let a = 0;
  }

  //calcula actividad
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

  //enviarrespuesta
  hoy = new Date();

  enviar_respuesta() {
    this.pauseTimer();
    if (this.min = "00") {
      this.tiempo = 1;
    } else {
      this.tiempo = Number.parseInt(this.min);
    }
    var fecha = this.hoy.getFullYear() + '-' + (this.hoy.getMonth() + 1) + '-' + this.hoy.getDate();
    this.pregservice.send_solves({ usuario: sessionStorage.getItem("user"), id_actividad: this.preg_aleatoria.id, fecha: fecha, minutos: this.tiempo, intentos: 1, num_actividad: this.calc_num_act(), puntaje: this.puntos }).subscribe(resp => {
      //console.log(resp);
    });
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
