import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
import { PreguntasComponent } from '../preguntas/preguntas.component';
import { PreguntasService } from '../servicios/preguntas.service';
@Component({
  selector: 'app-preguntas-dos',
  templateUrl: './preguntas-dos.component.html',
  styleUrls: ['./preguntas-dos.component.css']
})
export class PreguntasDosComponent implements AfterViewInit {

  valor;
  private datos: ElementRef[];
  private pares: number[][] = [];
  private imgss: number[] = [];
  faQuestion = iconos.faQuestionCircle;
  private opciones: any[];
  puntos = 20;
  tiempo: number;
  aleatorios: any[] = [];

  mostrar1: boolean = true;
  mostrar2: boolean = true;
  mostrar3: boolean = true;
  mostrar4: boolean = true;
  mostrar5: boolean = true;
  mostrar6: boolean = true;


  @ViewChild("img1") public img1: ElementRef;
  @ViewChild("img2") public img2: ElementRef;
  @ViewChild("img3") public img3: ElementRef;
  @ViewChild("img4") public img4: ElementRef;
  @ViewChild("img5") public img5: ElementRef;
  @ViewChild("img6") public img6: ElementRef;

  estilo1: any;
  estilo2: any;
  estilo3: any;
  estilo4: any;
  estilo5: any;
  estilo6: any;


  constructor(public ruta: Router, public pregservice: PreguntasService) { }

  ngAfterViewInit(): void {
    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      this.valor = sessionStorage.getItem("modulo");
      this.pregservice.get_questions({ modulo: sessionStorage.getItem("num_mod"), lenguaje: sessionStorage.getItem("lenguaje"), tipo: "pares", usuario: sessionStorage.getItem("user") }).subscribe(resp => {
        if (resp.length >= 3) {
          this.startTimer();
          for (let index = 0; index < 3; index++) {
            let rand = this.getRandomInt(0, resp.length - 1);
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
          this.opciones = [this.aleatorios[0].pregunta, this.aleatorios[1].pregunta, this.aleatorios[2].pregunta,
          this.aleatorios[0].opcion_correcta, this.aleatorios[1].opcion_correcta, this.aleatorios[2].opcion_correcta];
          this.datos = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6];
          this.cargar();
          //forma pares
          for (let index = 0; index < 3; index++) {
            this.pares.push([this.aleatorios[index].pregunta, this.aleatorios[index].opcion_correcta]);
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

  palabra1 = null;
  palabra2 = null;

  comprueba(img: any) {
    if (img == "img1") {
      if (this.palabra1 == null) {
        this.palabra1 = this.img1;
        this.estilo1 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == null) {
        this.palabra2 = this.img1;
        this.estilo1 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.pares.length; index++) {
          if (this.palabra1 != this.palabra2) {
            if (this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
              if (this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              } else {
                this.quitarborde(this.palabra1);
                this.quitarborde(this.palabra2);
              }
            }
          } else {
            this.quitarborde(this.palabra2);
          }
        }
        this.palabra1 = null;
        this.palabra2 = null;
      }
    } else if (img == "img2") {
      if (this.palabra1 == null) {
        this.palabra1 = this.img2;
        this.estilo2 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == null) {
        this.palabra2 = this.img2;
        this.estilo2 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.pares.length; index++) {
          if (this.palabra1 != this.palabra2) {
            if (this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
              if (this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              } else {
                this.quitarborde(this.palabra1);
                this.quitarborde(this.palabra2);
              }
            }
          } else {
            this.quitarborde(this.palabra2);
          }
        }
        this.palabra1 = null;
        this.palabra2 = null;
      }
    } else if (img == "img3") {
      if (this.palabra1 == null) {
        this.palabra1 = this.img3;
        this.estilo3 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == null) {
        this.palabra2 = this.img3;
        this.estilo3 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.pares.length; index++) {
          if (this.palabra1 != this.palabra2) {
            if (this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
              if (this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              } else {
                this.quitarborde(this.palabra1);
                this.quitarborde(this.palabra2);
              }
            }
          } else {
            this.quitarborde(this.palabra2);
          }
        }
        this.palabra1 = null;
        this.palabra2 = null;
      }
    } else if (img == "img4") {
      if (this.palabra1 == null) {
        this.palabra1 = this.img4;
        this.estilo4 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == null) {
        this.palabra2 = this.img4;
        this.estilo4 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.pares.length; index++) {
          if (this.palabra1 != this.palabra2) {
            if (this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
              if (this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              } else {
                this.quitarborde(this.palabra1);
                this.quitarborde(this.palabra2);
              }
            }
          } else {
            this.quitarborde(this.palabra2);
          }
        }
        this.palabra1 = null;
        this.palabra2 = null;
      }
    } else if (img == "img5") {
      if (this.palabra1 == null) {
        this.palabra1 = this.img5;
        this.estilo5 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == null) {
        this.palabra2 = this.img5;
        this.estilo5 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.pares.length; index++) {
          if (this.palabra1 != this.palabra2) {
            if (this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
              if (this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              } else {
                this.quitarborde(this.palabra1);
                this.quitarborde(this.palabra2);
              }
            }
          } else {
            this.quitarborde(this.palabra2);
          }
        }
        this.palabra1 = null;
        this.palabra2 = null;
      }
    } else if (img == "img6") {
      if (this.palabra1 == null) {
        this.palabra1 = this.img6;
        this.estilo6 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == null) {
        this.palabra2 = this.img6;
        this.estilo6 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.pares.length; index++) {
          if (this.palabra1 != this.palabra2) {
            if (this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra1.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
              if (this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][0] || this.palabra2.nativeElement.attributes[1].nodeValue == this.pares[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              } else {
                this.quitarborde(this.palabra1);
                this.quitarborde(this.palabra2);
              }
            }
          } else {
            this.quitarborde(this.palabra2);
          }
        }
        this.palabra1 = null;
        this.palabra2 = null;
      }
    }
  }

  cargar() {
    for (let i = 0; i < 6; i++) {
      let rnd = this.getRandomInt(0, 5);
      let bool = false;
      for (let j = 0; j < i; j++) {
        if (this.imgss[j] == rnd) {
          bool = true;
          break;
        }
      }
      if (bool) {
        i--;
      } else {
        this.imgss.push(rnd);
      }
    }
    for (let index = 0; index < 6; index++) {
      this.datos[index].nativeElement.setAttribute("src", this.opciones[this.imgss[index]]);
    }
  }

  ponervisto(img: any) {
    switch (img) {
      case this.img1:
        this.estilo1 = { 'border': '5px solid green' };
        this.mostrar1 = false;
        break;
      case this.img2:
        this.estilo2 = { 'border': '5px solid green' };
        this.mostrar2 = false;
        break;
      case this.img3:
        this.estilo3 = { 'border': '5px solid green' };
        this.mostrar3 = false;
        break;
      case this.img4:
        this.estilo4 = { 'border': '5px solid green' };
        this.mostrar4 = false;
        break;
      case this.img5:
        this.estilo5 = { 'border': '5px solid green' };
        this.mostrar5 = false;
        break;
      case this.img6:
        this.estilo6 = { 'border': '5px solid green' };
        this.mostrar6 = false;
        break;
    }
  }

  quitarborde(img: any) {
    switch (img) {
      case this.img1:
        this.estilo1 = { 'border': '' };
        this.img1.nativeElement.setAttribute('aria-disabled', false);
        break;
      case this.img2:
        this.estilo2 = { 'border': '' };
        this.img2.nativeElement.setAttribute('aria-disabled', false);
        break;
      case this.img3:
        this.estilo3 = { 'border': '' };
        this.img3.nativeElement.setAttribute('aria-disabled', false);
        break;
      case this.img4:
        this.estilo4 = { 'border': '' };
        this.img4.nativeElement.setAttribute('aria-disabled', false);
        break;
      case this.img5:
        this.estilo5 = { 'border': '' };
        this.img5.nativeElement.setAttribute('aria-disabled', false);
        break;
      case this.img6:
        this.estilo6 = { 'border': '' };
        this.img6.nativeElement.setAttribute('aria-disabled', false);
        break;
    }
  }

  //calc_num_act
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
    for (let index = 0; index < 3; index++) {
      var fecha = this.hoy.getFullYear() + '-' + (this.hoy.getMonth() + 1) + '-' + this.hoy.getDate();
      this.pregservice.send_solves({ usuario: sessionStorage.getItem("user"), id_actividad: this.aleatorios[index].id, fecha: fecha, minutos: this.tiempo, intentos: 1, num_actividad: this.calc_num_act(), puntaje: this.puntos }).subscribe(resp => {
        //console.log(resp);
      });
    }

    this.ruta.navigateByUrl('/mapa-preguntas', {
      skipLocationChange: true
    }).then(() =>
      this.ruta.navigate([PreguntasDosComponent])
    );

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
