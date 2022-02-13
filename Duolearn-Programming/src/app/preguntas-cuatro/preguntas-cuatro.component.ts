import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
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


  datos: any[][] = [];
  pregunta: any;
  pregs_Salieron: number[] = [];
  total_correctas:number=0;

  opcs: any[] = [];
  esc: any[] = [];
  salio: any[] = [];
  pregs: any[] = [];

  faQuestion = iconos.faQuestionCircle;
  constructor(private pregservice: PreguntasService) { }

  ngAfterViewInit(): void {
    this.pregservice.obtener_pregunta3().subscribe(resp => {
      this.pregunta = resp;
      console.log(resp);
      this.opcs = [this.opcion1, this.opcion2, this.opcion3, this.opcion4];
      this.pregs = [this.preg1, this.preg2, this.preg3, this.preg4];
      this.esc=[this.esc1,this.esc2,this.esc3,this.esc4];
      for (let i = 0; i < 4; i++) {
        let rnd = this.getRandomInt(0, 3);
        let bol = true;
        for (let j = 0; j <= this.salio.length; j++) {
          if (this.salio[j] == rnd) {
            bol = false;
          }
        }
        if (bol) {
          this.pregs[i].nativeElement.innerText = resp[rnd]["pregunta"];
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
          this.opcs[i].nativeElement.innerText = resp[rnd]["respuesta"];
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

  comprueba() {
    for (let index = 0; index < 4; index++) {
      let a=this.retornaselect(this.esc[index].nativeElement.options.selectedIndex,this.esc[index]);
      for (let j = 0; j < 4; j++) {
        if(this.pregs[index].nativeElement.innerText==this.pregunta[j].pregunta){
          let b=this.pregunta[j];
          if(a==b.respuesta){
            console.log("correcto");
            this.total_correctas++;
          }else{
            console.log("incorrecto");
          }
        }
      }
    }
  }

  retornaselect(index: number,select:ElementRef): string{
    return select.nativeElement.options[index].innerText;
  }
}
