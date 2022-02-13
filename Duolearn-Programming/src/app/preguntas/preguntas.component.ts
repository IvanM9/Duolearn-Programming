import { OnInit, Component } from '@angular/core';
import { PreguntasService } from '../servicios/preguntas.service';
import { ElementRef, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';


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
  faQuestion = iconos.faQuestionCircle;
  private puntos=20;
  valor = InstruccionesComponent.valor;
  constructor(private pregservice: PreguntasService) {
    //this.datos = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];

  }

  ngOnInit(): void {
    this.pregservice.obtener_pregunta().subscribe(respuesta => {
      //console.log(respuesta);
      this.Pregunta = respuesta;
      this.cargar_elementos();
      this.opciones = [respuesta[0].respuesta, respuesta[0].opcion_a, respuesta[0].opcion_b, respuesta[0].opcion_c]
      this.pregunta.nativeElement.innerText = respuesta[0].pregunta;
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
  cargar_elementos() {
    this.datos = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];
  }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  estilo1:any;
  estilo2:any;
  estilo3:any;
  estilo4:any;

  comprueba(opcion: string) {
    let texto;
    switch (opcion) {
      case "opcion1":
        texto=this.opcion1.nativeElement.innerText;
        if(texto==this.Pregunta[0].respuesta){
          console.log("correcto");
          this.estilo1 = { 'border': '5px solid green' ,"pointer-events" : "none"};
          this.estilo2=this.concatJSON(this.estilo2);
          this.estilo3=this.concatJSON(this.estilo3);
          this.estilo4=this.concatJSON(this.estilo4);
          this.puntos-=5;
        }else{
          console.log("incorrecto");
          this.estilo1 = { 'border': '5px solid red' ,"pointer-events" : "none"};
        }
        break;
      case "opcion2":
        texto=this.opcion2.nativeElement.innerText;
        if(texto==this.Pregunta[0].respuesta){
          console.log("correcto");
          this.estilo2 = { 'border': '5px solid green',"pointer-events" : "none" };  
          this.estilo1=this.concatJSON(this.estilo1);
          this.estilo3=this.concatJSON(this.estilo3);
          this.estilo4=this.concatJSON(this.estilo4);        
        }else{
          console.log("incorrecto");
          this.estilo2 = { 'border': '5px solid red',"pointer-events" : "none" };
          this.puntos-=5;
        }
        break;
      case "opcion3":
        texto=this.opcion3.nativeElement.innerText;
        if(texto==this.Pregunta[0].respuesta){
          console.log("correcto");
          this.estilo3 = { 'border': '5px solid green',"pointer-events" : "none" };
          this.estilo2=this.concatJSON(this.estilo2);
          this.estilo1=this.concatJSON(this.estilo1);
          this.estilo4=this.concatJSON(this.estilo4);
        }else{
          console.log("incorrecto");
          this.estilo3 = { 'border': '5px solid red',"pointer-events" : "none" };
          this.puntos-=5;
        }
        break;
      case "opcion4":
        texto=this.opcion4.nativeElement.innerText;
        if(texto==this.Pregunta[0].respuesta){
          console.log("correcto");
          this.estilo4 = { 'border': '5px solid green',"pointer-events" : "none" };
          this.estilo2=this.concatJSON(this.estilo2);
          this.estilo3=this.concatJSON(this.estilo3);
          this.estilo1=this.concatJSON(this.estilo1);
        }else{
          console.log("incorrecto");
          this.estilo4 = { 'border': '5px solid red',"pointer-events" : "none" };
          this.puntos-=5;
        }
        break;
    }
    
  }
  concatJSON(estilo:any){
    const estiloaux={"pointer-events" : "none" };
    const merge = Object.assign({},estilo,estiloaux);  
    return merge;
   }
  
}