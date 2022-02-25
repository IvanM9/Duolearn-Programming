import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import * as iconosfab from '@fortawesome/free-brands-svg-icons';
import { UsuariosService } from '../servicios/usuarios.service';
import { EstadisticasService } from '../servicios/estadisticas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  bol: boolean = true;
  bol2: boolean = false;

  constructor(
    public ruta: Router,
    private user_serv: UsuariosService,
    public estadisticas_serv: EstadisticasService
  ) { }


  fagraduation = iconos.faGraduationCap;
  fahome = iconos.faHome;
  fachart = iconos.faChartBar;
  fauser = iconos.faUser;
  facomments = iconos.faComments;
  facrown = iconos.faCrown;
  fasignoutalt = iconos.faSignOutAlt;
  fabars = iconos.faBars;
  fasearch = iconos.faSearch;
  //modulos
  fainfocircle = iconos.faInfoCircle;
  facheckcircle = iconos.faCheckCircle;
  faredoalt = iconos.faRedoAlt;
  facubes = iconos.faCubes;
  fahive = iconosfab.faHive;
  fath = iconos.faTh;
  fafont = iconos.faFont;
  fafilealt = iconos.faCode;
  facode = iconos.faCode;

  public static modulo_select: any = "vacio";
  public nombre: string;
  json_general: any = {};

  //
  @ViewChild("lenguaje") public esc: ElementRef;


  //porcentajes
  public static porcentaje_mod1: any = 0;
  public static porcentaje_mod2: any = 0;
  public static porcentaje_mod3: any = 0;
  public static porcentaje_mod4: any = 0;
  public static porcentaje_mod5: any = 0;
  public static porcentaje_mod6: any = 0;
  public static porcentaje_mod7: any = 0;
  public static porcentaje_mod8: any = 0;
  //porcentajes
  porcentaje_1: any = DashboardComponent.porcentaje_mod1;
  porcentaje_2: any = DashboardComponent.porcentaje_mod2;
  porcentaje_3: any = DashboardComponent.porcentaje_mod3;
  porcentaje_4: any = DashboardComponent.porcentaje_mod4;
  porcentaje_5: any = DashboardComponent.porcentaje_mod5;
  porcentaje_6: any = DashboardComponent.porcentaje_mod6;
  porcentaje_7: any = DashboardComponent.porcentaje_mod7;
  porcentaje_8: any = DashboardComponent.porcentaje_mod8;

  //estilos
  estilo1: any;
  estilo2: any;
  estilo3: any;
  estilo4: any;
  estilo5: any;
  estilo6: any;
  estilo7: any;
  estilo8: any;

  //estilos letras
  estiloletra1: any;
  estiloletra2: any;
  estiloletra3: any;
  estiloletra4: any;
  estiloletra5: any;
  estiloletra6: any;
  estiloletra7: any;
  estiloletra8: any;

  //estilos iconos
  estiloicono1: any;
  estiloicono2: any;
  estiloicono3: any;
  estiloicono4: any;
  estiloicono5: any;
  estiloicono6: any;
  estiloicono7: any;
  estiloicono8: any;

  //nummod
  nun_mod: any = 0;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.bol = !this.bol;
      this.bol2 = !this.bol2;
    }, 1250);
    AOS.init();
    //console.log(sessionStorage.getItem("usuario"));
    this.user_serv.get_user({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
      if (resp.estado == 0) {
        this.ruta.navigateByUrl("/principal");
      }
      else {
        if (sessionStorage.getItem("lenguaje") == "java") {
          this.estadisticas_serv.obtener_est_java({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
            this.json_general = resp;
            this.nombre = sessionStorage.getItem("user");
            console.log(this.json_general);
            this.asigna_img();
            this.porcentaje();
            this.asignaporcentajes();
            this.verifica_porcentaje();
          });
        } else if (sessionStorage.getItem("lenguaje") == "csh") {
          this.estadisticas_serv.obtener_est_csh({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
            this.json_general = resp;
            this.nombre = sessionStorage.getItem("user");
            console.log(this.json_general);
            this.porcentaje();
            this.asigna_img();
            this.asignaporcentajes();
            this.verifica_porcentaje();
          });
        }

      }
    });
  }

  verifica_porcentaje() {
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono1 = { 'color': '#fff' };
      this.estiloletra1 = { 'color': '#fff' };
    }
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono2 = { 'color': '#fff' };
      this.estiloletra2 = { 'color': '#fff' };
    }
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono3 = { 'color': '#fff' };
      this.estiloletra3 = { 'color': '#fff' };
    }
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono4 = { 'color': '#fff' };
      this.estiloletra4 = { 'color': '#fff' };
    }
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono5 = { 'color': '#fff' };
      this.estiloletra5 = { 'color': '#fff' };
    }
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono6 = { 'color': '#fff' };
      this.estiloletra6 = { 'color': '#fff' };
    }
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono7 = { 'color': '#fff' };
      this.estiloletra7 = { 'color': '#fff' };
    }
    if (DashboardComponent.porcentaje_mod1 == 100) {
      this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono8 = { 'color': '#fff' };
      this.estiloletra8 = { 'color': '#fff' };
    }
  }

  agregar_text(entrada: any, number: any) {
    sessionStorage.setItem("modulo", entrada);
    this.nun_mod = number;
    sessionStorage.setItem("num_mod", number);
    this.ruta.navigateByUrl("/teorias");
  }

  close_session() {
    /* this.user_serv.close_session().subscribe(resp => {
       console.log(resp.mensaje);
     });*/
    sessionStorage.clear();
    this.ruta.navigateByUrl("/principal");
  }

  porcentaje() {
    DashboardComponent.porcentaje_mod1 = 0;
    DashboardComponent.porcentaje_mod2 = 0;
    DashboardComponent.porcentaje_mod3 = 0;
    DashboardComponent.porcentaje_mod4 = 0;
    DashboardComponent.porcentaje_mod5 = 0;
    DashboardComponent.porcentaje_mod6 = 0;
    DashboardComponent.porcentaje_mod7 = 0;
    DashboardComponent.porcentaje_mod8 = 0;

    for (let index = 0; index < 10; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod1 += 10;
      }
    }

    for (let index = 10; index < 20; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod2 += 10;
      }
    }

    for (let index = 20; index < 30; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod3 += 10;
      }
    }

    for (let index = 30; index < 40; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod4 += 10;
      }
    }

    for (let index = 40; index < 50; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod5 += 10;
      }
    }

    for (let index = 50; index < 60; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod6 += 10;
      }
    }

    for (let index = 60; index < 70; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod7 += 10;
      }
    }

    for (let index = 70; index < 80; index++) {
      if (this.json_general.puntaje_actividades[index] > 0) {
        DashboardComponent.porcentaje_mod8 += 10;
      }
    }

  }

  asignaporcentajes() {
    this.porcentaje_1 = DashboardComponent.porcentaje_mod1;
    this.porcentaje_2 = DashboardComponent.porcentaje_mod2;
    this.porcentaje_3 = DashboardComponent.porcentaje_mod3;
    this.porcentaje_4 = DashboardComponent.porcentaje_mod4;
    this.porcentaje_5 = DashboardComponent.porcentaje_mod5;
    this.porcentaje_6 = DashboardComponent.porcentaje_mod6;
    this.porcentaje_7 = DashboardComponent.porcentaje_mod7;
    this.porcentaje_8 = DashboardComponent.porcentaje_mod8;
  }

  img: any = "";

  elegir_leng() {
    if (this.retornaselect(this.esc.nativeElement.options.selectedIndex) == "Java") {
      sessionStorage.setItem("lenguaje", "java");
    } else if (this.retornaselect(this.esc.nativeElement.options.selectedIndex) == "C#") {
      sessionStorage.setItem("lenguaje", "csh");
    }
    if (sessionStorage.getItem("lenguaje") == "java") {
      this.img = "../../assets/imagenes/logo-java.jpg";
    } else {
      this.img = "../../assets/imagenes/logo-csharp.png";
    }
    window.location.reload();
  }


  sel_java: boolean;
  sel_csh: boolean;

  asigna_img() {
    if (sessionStorage.getItem("lenguaje") == "java") {
      this.img = "../../assets/imagenes/logo-java.jpg";
      this.sel_java = true;
      this.sel_csh=false;
    } else {
      this.img = "../../assets/imagenes/logo-csharp.png";
      this.sel_csh=true;
      this.sel_java = false;
    }
  }

  retornaselect(index: number): string {
    return this.esc.nativeElement.options[index].innerText;
  }

}
