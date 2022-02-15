import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import * as iconosfab from '@fortawesome/free-brands-svg-icons';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bol: boolean = true;
  constructor(
    public ruta: Router,
    private instr: InstruccionesComponent,
    private user_serv: UsuariosService) { }
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
  porcentaje_mod1: any = 0;
  porcentaje_mod2: any = 0;
  porcentaje_mod3: any = 0;
  porcentaje_mod4: any = 0;
  porcentaje_mod5: any = 0;
  porcentaje_mod6: any = 0;
  porcentaje_mod7: any = 0;
  porcentaje_mod8: any = 0;

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

  //archivo completo
  jsonmod1: any = JSON.parse(sessionStorage.getItem("Variables y tipos de datos"));
  jsonmod2: any = JSON.parse(sessionStorage.getItem("Condicionales"));
  jsonmod3: any = JSON.parse(sessionStorage.getItem("Ciclos Repetitivos"));
  jsonmod4: any = JSON.parse(sessionStorage.getItem("Funciones y Procedimientos"));
  jsonmod5: any = JSON.parse(sessionStorage.getItem("Vectores"));
  jsonmod6: any = JSON.parse(sessionStorage.getItem("Matrices"));
  jsonmod7: any = JSON.parse(sessionStorage.getItem("Caracteres y cadenas de texto"));
  jsonmod8: any = JSON.parse(sessionStorage.getItem("Archivos de texto"));

  ngOnInit(): void {
    setTimeout(() => {
      this.bol = !this.bol;
    }, 3000);
    AOS.init();
    //console.log(sessionStorage.getItem("usuario"));
    this.poner_porcentaje();
    this.verifica_porcentaje();
    this.user_serv.get_user({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
      if (resp.estado == 0) {
        this.ruta.navigateByUrl("/principal");
      }
      else
        this.nombre = sessionStorage.getItem("user");
    });
  }

  poner_porcentaje() {
    if (this.jsonmod1 != null) {
      this.porcentaje_mod1 = this.jsonmod1.porcentaje;
    }
    if (this.jsonmod2 != null) {
      this.porcentaje_mod2 = this.jsonmod2.porcentaje;
    }
    if (this.jsonmod3 != null) {
      this.porcentaje_mod3 = this.jsonmod3.porcentaje;
    }
    if (this.jsonmod4 != null) {
      this.porcentaje_mod4 = this.jsonmod4.porcentaje;
    }
    if (this.jsonmod5 != null) {
      this.porcentaje_mod5 = this.jsonmod5.porcentaje;
    }
    if (this.jsonmod6 != null) {
      this.porcentaje_mod6 = this.jsonmod6.porcentaje;
    }
    if (this.jsonmod7 != null) {
      this.porcentaje_mod7 = this.jsonmod7.porcentaje;
    }
    if (this.jsonmod8 != null) {
      this.porcentaje_mod8 = this.jsonmod8.porcentaje;
    }
  }

  verifica_porcentaje() {
    if (this.porcentaje_mod1 == 100) {
      this.estilo1 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono1={ 'color': '#fff'};
      this.estiloletra1={ 'color': '#fff'};
    }
    if (this.porcentaje_mod2 == 100) {
      this.estilo2 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono2={ 'color': '#fff'};
      this.estiloletra2={ 'color': '#fff'};
    }
    if (this.porcentaje_mod3 == 100) {
      this.estilo3 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono3={ 'color': '#fff'};
      this.estiloletra3={ 'color': '#fff'};
    }
    if (this.porcentaje_mod4 == 100) {
      this.estilo4 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono4={ 'color': '#fff'};
      this.estiloletra4={ 'color': '#fff'};
    }
    if (this.porcentaje_mod5 == 100) {
      this.estilo5 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono5={ 'color': '#fff'};
      this.estiloletra5={ 'color': '#fff'};
    }
    if (this.porcentaje_mod6 == 100) {
      this.estilo6 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono6={ 'color': '#fff'};
      this.estiloletra6={ 'color': '#fff'};
    }
    if (this.porcentaje_mod7 == 100) {
      this.estilo7 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono7={ 'color': '#fff'};
      this.estiloletra7={ 'color': '#fff'};
    }
    if (this.porcentaje_mod8 == 100) {
      this.estilo8 = { 'background-color': 'rgb(5, 196, 88)', 'color': '#fff', "pointer-events": "none" };
      this.estiloicono8={ 'color': '#fff'};
      this.estiloletra8={ 'color': '#fff'};
    }
  }

  agregar_text(entrada: any) {
    sessionStorage.setItem("modulo",entrada);
    DashboardComponent.modulo_select = entrada;
    InstruccionesComponent.valor = entrada;
    this.ruta.navigateByUrl("/mapa-preguntas");
  }

  close_session() {
    /* this.user_serv.close_session().subscribe(resp => {
       console.log(resp.mensaje);
     });*/
    sessionStorage.clear();
    this.ruta.navigateByUrl("/principal");
  }

}
