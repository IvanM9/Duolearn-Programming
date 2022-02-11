import { OnInit, Component } from '@angular/core';
import { PreguntasService } from '../servicios/preguntas.service';
import { ElementRef, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';


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
}