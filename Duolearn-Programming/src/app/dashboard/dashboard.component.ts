import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import * as iconosfab from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bol: boolean = true;
  constructor(public ruta: Router, private instr: InstruccionesComponent) { }
  fagraduation = iconos.faGraduationCap;
  fahome = iconos.faHome;
  fachart = iconos.faChartBar;
  fausers = iconos.faUsers;
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


  ngOnInit(): void {
    setTimeout(() => {
      this.bol = !this.bol;
    }, 3000);
    AOS.init();
  }

  agregar_text(entrada: any) {
    InstruccionesComponent.valor = entrada;
    this.ruta.navigateByUrl("/instrucciones");
  }

}
