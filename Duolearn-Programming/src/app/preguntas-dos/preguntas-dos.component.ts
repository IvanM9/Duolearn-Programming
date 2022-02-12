import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
@Component({
  selector: 'app-preguntas-dos',
  templateUrl: './preguntas-dos.component.html',
  styleUrls: ['./preguntas-dos.component.css']
})
export class PreguntasDosComponent implements AfterViewInit {
  valor = InstruccionesComponent.valor;
  imgs: any[];
  private datos: ElementRef[];
  private parejas: number[][] = [];
  private nbimg: any[] = [];
  private parejas2: number[][] = [];
  private clicks: ElementRef[];
  mostrar1:boolean=true;
  mostrar2:boolean=true;
  mostrar3:boolean=true;
  mostrar4:boolean=true;
  mostrar5:boolean=true;
  mostrar6:boolean=true;

  private imgss: number[] = [];


  img = "../../assets/imagenes/codigo_de_prueba.png";
  ig = "../../assets/imagenes/logo-java.jpg";
  im = "../../assets/imagenes/logo-csharp.png";


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

  faQuestion = iconos.faQuestionCircle;
  private opciones: any[];
  private salio: any[] = [];
  click = 0;
  constructor() { }

  ngAfterViewInit(): void {
    this.opciones = [this.img, this.ig, this.im];
    this.cargar_elementos();
    this.cargar();
    this.formapareja();
  }

  cargar_elementos() {
    this.datos = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6];
  }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  guardapares() {

  }

  palabra1 = -1;
  palabra2 = -1;

  comprueba(img: any) {
    if (img == "img1") {
      if (this.palabra1 == -1) {
        this.palabra1 = 0;
        this.estilo1 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == -1) {
        this.palabra2 = 0;
        this.estilo1 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.parejas2.length; index++) {
          if (this.palabra1 == this.parejas2[index][0] || this.palabra1 == this.parejas2[index][1]) {
            if (this.palabra1 != this.palabra2) {
              if (this.palabra2 == this.parejas2[index][0] || this.palabra2 == this.parejas2[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              }else{
                //mensaje incorrecto
              }
            }else{
              if(this.palabra1==-1){
                this.quitarborde(this.palabra2);
              }else{
                this.quitarborde(this.palabra1);
              }
            }
          }
        }
        this.palabra1=-1;
        this.palabra2=-1;
      }
    } else if (img == "img2") {
      if (this.palabra1 == -1) {
        this.palabra1 = 1;
        this.estilo2 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == -1) {
        this.palabra2 = 1;
        this.estilo2 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.parejas2.length; index++) {
          if (this.palabra1 == this.parejas2[index][0] || this.palabra1 == this.parejas2[index][1]) {
            if (this.palabra1 != this.palabra2) {
              if (this.palabra2 == this.parejas2[index][0] || this.palabra2 == this.parejas2[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              }else{
                //mensaje incorrecto
              }
            }else{
              if(this.palabra1==-1){
                this.quitarborde(this.palabra2);
              }else{
                this.quitarborde(this.palabra1);
              }
            }
          }
        }
        this.palabra1=-1;
        this.palabra2=-1;
      }
    }
    else if (img == "img3") {
      if (this.palabra1 == -1) {
        this.palabra1 = 2;
        this.estilo3 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == -1) {
        this.palabra2 = 2;
        this.estilo3 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.parejas2.length; index++) {
          if (this.palabra1 == this.parejas2[index][0] || this.palabra1 == this.parejas2[index][1]) {
            if (this.palabra1 != this.palabra2) {
              if (this.palabra2 == this.parejas2[index][0] || this.palabra2 == this.parejas2[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              }else{
                //mensaje incorrecto
              }
            }else{
              if(this.palabra1==-1){
                this.quitarborde(this.palabra2);
              }else{
                this.quitarborde(this.palabra1);
              }
            }
          }
        }
        this.palabra1=-1;
        this.palabra2=-1;
      }
    }
    else if (img == "img4") {
      if (this.palabra1 == -1) {
        this.palabra1 = 3;
        this.estilo4 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == -1) {
        this.palabra2 = 3;
        this.estilo4 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.parejas2.length; index++) {
          if (this.palabra1 == this.parejas2[index][0] || this.palabra1 == this.parejas2[index][1]) {
            if (this.palabra1 != this.palabra2) {
              if (this.palabra2 == this.parejas2[index][0] || this.palabra2 == this.parejas2[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              }else{
                //mensaje incorrecto
              }
            }else{
              if(this.palabra1==-1){
                this.quitarborde(this.palabra2);
              }else{
                this.quitarborde(this.palabra1);
              }
            }
          }
        }
        this.palabra1=-1;
        this.palabra2=-1;
      }
    }
    else if (img == "img5") {
      if (this.palabra1 == -1) {
        this.palabra1 = 4;
        this.estilo5 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == -1) {
        this.palabra2 = 4;
        this.estilo5 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.parejas2.length; index++) {
          if (this.palabra1 == this.parejas2[index][0] || this.palabra1 == this.parejas2[index][1]) {
            if (this.palabra1 != this.palabra2) {
              if (this.palabra2 == this.parejas2[index][0] || this.palabra2 == this.parejas2[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              }else{
                //mensaje incorrecto
              }
            }else{
              if(this.palabra1==-1){
                this.quitarborde(this.palabra2);
              }else{
                this.quitarborde(this.palabra1);
              }
            }
          }
        }
        this.palabra1=-1;
        this.palabra2=-1;
      }
    }
    else if (img == "img6") {
      if (this.palabra1 == -1) {
        this.palabra1 = 5;
        this.estilo6 = { 'border': '5px solid blue' };
      }
      else if (this.palabra2 == -1) {
        this.palabra2 = 5;
        this.estilo6 = { 'border': '5px solid blue' };
        for (let index = 0; index < this.parejas2.length; index++) {
          if (this.palabra1 == this.parejas2[index][0] || this.palabra1 == this.parejas2[index][1]) {
            if (this.palabra1 != this.palabra2) {
              if (this.palabra2 == this.parejas2[index][0] || this.palabra2 == this.parejas2[index][1]) {
                this.ponervisto(this.palabra1);
                this.ponervisto(this.palabra2);
                break;
              }else{
                //mensaje incorrecto
              }
            }else{
              if(this.palabra1==-1){
                this.quitarborde(this.palabra2);
              }else{
                this.quitarborde(this.palabra1);
              }
            }
          }
        }
        this.palabra1=-1;
        this.palabra2=-1;
      }
    }
  }

  cargar() {
    for (let i = 0; i < 3; i++) {
      let rnd = this.getRandomInt(0, 2);
      let bool = false;
      //if (rnd != 0) {
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
      //}// else {
      //i--;
      //}
    }
    for (let index = 0; index < 6; index++) {
      let random = this.getRandomInt(0, this.imgss.length - 1);
      let g = 0;
      for (let j = 0; j < index; j++) {
        if (this.nbimg[j] == this.imgss[random]) {
          g++;
        }
      }
      if (g < 2) {
        this.nbimg.push(this.imgss[random]);
        this.datos[index].nativeElement.setAttribute("src", this.opciones[random]);
        this.parejas.push([this.imgss[random], index]);
      } else {
        index--;
      }
    }
    console.log(this.parejas);
  }

  formapareja() {
    for (let index = 0; index < 6; index++) {
      for (let j = index + 1; j < 6; j++) {
        if (this.parejas[index][0] == this.parejas[j][0]) {
          this.parejas2.push([this.parejas[index][1], this.parejas[j][1]]);
        }
      }
    }
    console.log(this.parejas2);
  }

  ponervisto(img: number) {
    switch (img) {
      case 0:
        this.estilo1 = { 'border': '5px solid green' };
        this.mostrar1=false;
        break;
      case 1:
        this.estilo2 = { 'border': '5px solid green' };
        this.mostrar2=false;
        break;
      case 2:
        this.estilo3 = { 'border': '5px solid green' };
        this.mostrar3=false;
        break;
      case 3:
        this.estilo4 = { 'border': '5px solid green' };
        this.mostrar4=false;
        break;
      case 4:
        this.estilo5 = { 'border': '5px solid green' };
        this.mostrar5=false;
        break;
      case 5:
        this.estilo6 = { 'border': '5px solid green' };
        this.mostrar6=false;
        break;
    }
  }

  quitarborde(img:number){
    switch (img) {
      case 0:
        this.estilo1 = { 'border': '' };
        this.img1.nativeElement.setAttribute('aria-disabled', false);
        break;
      case 1:
        this.estilo2 ={ 'border': '' };
        this.img2.nativeElement.setAttribute('aria-disabled', false);
        break;
      case 2:
        this.estilo3 ={ 'border': '' };
        this.img3.nativeElement.setAttribute('aria-disabled', false);
        break;
      case 3:
        this.estilo4 = { 'border': '' };
        this.img4.nativeElement.setAttribute('aria-disabled', false);
        break;
      case 4:
        this.estilo5 = { 'border': '' };
        this.img5.nativeElement.setAttribute('aria-disabled', false);
        break;
      case 5:
        this.estilo6 = { 'border': '' };
        this.img6.nativeElement.setAttribute('aria-disabled', false);
        break;
    }
  }
}
