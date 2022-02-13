import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { PreguntasService } from '../servicios/preguntas.service';


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

  estilo1:any;
  estilo2:any;
  estilo3:any;
  estilo4:any;

  public linea1: any;
  public linea2: any;
  public linea3: any;
  public linea4: any;
  public linea5: any;
  lineas: any[] = [];
  opciones: any[] = [];
  private salio: any[] = [];
  pregunta: any;

  faQuestion = iconos.faQuestionCircle;

  constructor(private pregservice: PreguntasService) { }

  ngAfterViewInit(): void {
    this.pregservice.obtener_preguntadd().subscribe(respuesta => {
      this.pregunta = respuesta;
      this.linea1 = respuesta[0].linea1;
      this.linea2 = respuesta[0].linea2;
      this.linea3 = respuesta[0].linea3;
      this.linea4 = respuesta[0].linea4;
      this.linea5 = respuesta[0].linea5;
      let bd = [respuesta[0].opcion1, respuesta[0].opcion2, respuesta[0].opcion3, respuesta[0].opcion4]
      this.asignaopcion();
      for (let i = 0; i < 4; i++) {
        let rnd = this.getRandomInt(0, 3);
        let bol = true;
        for (let j = 0; j <= this.salio.length; j++) {
          if (this.salio[j] == rnd) {
            bol = false;
          }
        }
        if (bol) {
          this.opciones[i].nativeElement.innerText = bd[rnd];
          this.salio.push(rnd);
        } else {
          i--;
        }
      }
    });
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  asignaopcion() {
    this.opciones = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];
  }

  comprueba() {
    if(this.texto1.nativeElement.outerText==this.pregunta[0].opcion1){
      console.log("DYD 1 CORRECTO");
      this.estilo1 = { 'border': '5px solid green' ,"pointer-events" : "none"};
    }else{
      console.log("DYD 1 INCORRECTO");
      this.estilo1 = { 'border': '5px solid red' ,"pointer-events" : "none"};
    } 
    if(this.texto2.nativeElement.outerText==this.pregunta[0].opcion2){
      console.log("DYD 1 CORRECTO");
      this.estilo2 = { 'border': '5px solid green' ,"pointer-events" : "none"};
    }else{
      console.log("DYD 2 INCORRECTO");
      this.estilo2 = { 'border': '5px solid red' ,"pointer-events" : "none"};
    }
    if(this.texto3.nativeElement.outerText==this.pregunta[0].opcion3){
      console.log("DYD 3 CORRECTO");
      this.estilo3 = { 'border': '5px solid green' ,"pointer-events" : "none"};
    }else{
      console.log("DYD 3 INCORRECTO");
      this.estilo3 = { 'border': '5px solid red' ,"pointer-events" : "none"};
    }
    if(this.texto4.nativeElement.outerText==this.pregunta[0].opcion4){
      console.log("DYD 4 CORRECTO");
      this.estilo4 = { 'border': '5px solid green' ,"pointer-events" : "none"};
    }else{
      console.log("DYD 4 INCORRECTO");
      this.estilo4 = { 'border': '5px solid red' ,"pointer-events" : "none"};
    }
  }
  elemn: any;

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("entra " + this.elemn + "en el " + ev.target.id);
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

}
