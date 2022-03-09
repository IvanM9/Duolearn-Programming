import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PreguntasCuatroComponent } from '../preguntas-cuatro/preguntas-cuatro.component';
import { PreguntasComponent } from '../preguntas/preguntas.component';
import { EstadisticasService } from '../servicios/estadisticas.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-mapa-preguntas',
  templateUrl: './mapa-preguntas.component.html',
  styleUrls: ['./mapa-preguntas.component.css']
})

export class MapaPreguntasComponent implements AfterViewInit {

  faVisto = iconos.faCheckCircle;
  public static mapa_modulo: any;
  @ViewChild("preg1") public preg1: ElementRef;
  @ViewChild("preg2") public preg2: ElementRef;
  @ViewChild("preg3") public preg3: ElementRef;
  @ViewChild("preg4") public preg4: ElementRef;
  @ViewChild("preg5") public preg5: ElementRef;
  @ViewChild("preg6") public preg6: ElementRef;
  @ViewChild("preg7") public preg7: ElementRef;
  @ViewChild("preg8") public preg8: ElementRef;
  @ViewChild("preg9") public preg9: ElementRef;
  @ViewChild("preg10") public preg10: ElementRef;

  //estilos letras

  estado1: any = { 'color': 'transparent' };
  estado2: any = { 'color': 'transparent' };
  estado3: any = { 'color': 'transparent' };
  estado4: any = { 'color': 'transparent' };
  estado5: any = { 'color': 'transparent' };
  estado6: any = { 'color': 'transparent' };
  estado7: any = { 'color': 'transparent' };
  estado8: any = { 'color': 'transparent' };
  estado9: any = { 'color': 'transparent' };
  estado10: any = { 'color': 'transparent' };

  //estilos botones
  estilo1: any;
  estilo2: any;
  estilo3: any;
  estilo4: any;
  estilo5: any;
  estilo6: any;
  estilo7: any;
  estilo8: any;
  estilo9: any;
  estilo10: any;



  valor: any;
  bol=true;
  actividades_rutas: any[] = ["/preguntas", "/preguntas-dos","/preguntas-tres","/preguntas-cuatro","/preguntas-cinco"];

  constructor(public ruta: Router, public estadisticas_serv: EstadisticasService) {
    this.ngAfterViewInit();
   }

  ngAfterViewInit(): void {

    if (sessionStorage.getItem("modulo") == null) {
      this.ruta.navigateByUrl("/dashboard");
    } else {
      MapaPreguntasComponent.mapa_modulo = DashboardComponent.modulo_select;
      this.valor = sessionStorage.getItem("modulo");
      if (sessionStorage.getItem("lenguaje") == "java") {
        this.estadisticas_serv.obtener_est_java({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
          this.json_general = resp;
          //console.log(this.json_general);
          if (this.porcentaje() == 100) {
            this.ruta.navigateByUrl("/dashboard");
          }
          else {
            this.verifica_usadas();
            setInterval(() => {
              window.setTimeout(() => {
                this.verifica_usadas();
              }, 500);
            }, 500);
          }
        });
      } else if (sessionStorage.getItem("lenguaje") == "csh") {
        this.estadisticas_serv.obtener_est_csh({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
          this.json_general = resp;
          //console.log(this.json_general);
          if (this.porcentaje() == 100) {
            this.ruta.navigateByUrl("/dashboard");
          }
          else {
            this.verifica_usadas();
            setInterval(() => {
              window.setTimeout(() => {
                this.verifica_usadas();
              }, 500);
            }, 500);
          }
        });
      }
    }

  }

  random: any;

  actividades(actividad: any) {
    this.random = this.getRandomInt(0, this.actividades_rutas.length - 1);
    if (this.random == 0) {
      PreguntasComponent.num_act = actividad;
      return "act1";
    } else {
      PreguntasCuatroComponent.numact = actividad;
      return "act2";
    }
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  json_general: any = {};

  hacer_act(actividad: any) {
    sessionStorage.setItem("num_act", actividad);
    this.actividades(actividad);
    this.ruta.navigateByUrl(this.actividades_rutas[this.random]);
  }

  verifica_usadas() {
    switch (sessionStorage.getItem("num_mod")) {
      case "1":
        if (this.json_general.puntaje_actividades[0] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[1] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[2] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[3] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[4] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[5] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[6] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[7] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[8] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[9] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
      case "2":
        if (this.json_general.puntaje_actividades[10] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[11] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[12] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[13] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[14] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[15] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[16] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[17] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[18] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[19] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
      case "3":
        if (this.json_general.puntaje_actividades[20] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[21] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[22] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[23] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[24] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[25] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[26] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[27] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[28] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[29] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
      case "4":
        if (this.json_general.puntaje_actividades[30] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[31] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[32] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[33] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[34] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[35] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[36] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[37] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[38] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[39] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
      case "5":
        if (this.json_general.puntaje_actividades[40] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[41] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[42] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[43] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[44] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[45] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[46] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[47] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[48] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[49] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
      case "6":
        if (this.json_general.puntaje_actividades[50] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[51] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[52] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[53] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[54] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[55] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[56] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[57] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[58] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[59] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
      case "7":
        if (this.json_general.puntaje_actividades[60] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[61] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[62] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[63] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[64] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[65] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[66] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[67] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[68] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[69] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
      case "8":
        if (this.json_general.puntaje_actividades[70] > 0) {
          this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado1 = { 'color': 'rgb(5, 196, 88)' };
        }
        if (this.json_general.puntaje_actividades[71] > 0) {
          this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado2 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[72] > 0) {
          this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado3 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[73] > 0) {
          this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado4 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[74] > 0) {
          this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado5 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[75] > 0) {
          this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado6 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[76] > 0) {
          this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado7 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[77] > 0) {
          this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado8 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[78] > 0) {
          this.estilo9 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado9 = { 'color': 'rgb(5, 196, 88)' };;
        }
        if (this.json_general.puntaje_actividades[79] > 0) {
          this.estilo10 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
          this.estado10 = { 'color': 'rgb(5, 196, 88)' };;
        }
        break;
    }
  }

  porcentaje():number {
    DashboardComponent.porcentaje_mod1=0;
    DashboardComponent.porcentaje_mod2=0;
    DashboardComponent.porcentaje_mod3=0;
    DashboardComponent.porcentaje_mod4=0;
    DashboardComponent.porcentaje_mod5=0;
    DashboardComponent.porcentaje_mod6=0;
    DashboardComponent.porcentaje_mod7=0;
    DashboardComponent.porcentaje_mod8=0;

    switch (sessionStorage.getItem("num_mod")) {
      case "1":
        for (let index = 0; index < 10; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod1+=10;
          }
        }
        return DashboardComponent.porcentaje_mod1;
      case "2":
        for (let index = 10; index < 20; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod2+=10;
          }
        }
        return DashboardComponent.porcentaje_mod2;
      case "3":
        for (let index = 20; index < 30; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod3+=10;
          }
        }
        return DashboardComponent.porcentaje_mod3;
      case "4":
        for (let index = 30; index < 40; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod4+=10;
          }
        }
        return DashboardComponent.porcentaje_mod4;
      case "5":
        for (let index = 40; index < 50; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod5+=10;
          }
        }
        return DashboardComponent.porcentaje_mod5;
      case "6":
        for (let index = 50; index < 60; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod6+=10;
          }
        }
        return DashboardComponent.porcentaje_mod6;
      case "7":
        for (let index = 60; index < 70; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod7+=10;
          }
        }
        return DashboardComponent.porcentaje_mod7;
      case "8":
        for (let index = 70; index < 80; index++) {
          if(this.json_general.puntaje_actividades[index]>0){
            DashboardComponent.porcentaje_mod8+=10;
          }
        }
        return DashboardComponent.porcentaje_mod8;
    }
  }

}
