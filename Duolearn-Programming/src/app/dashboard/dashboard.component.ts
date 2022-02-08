import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bol: boolean = true;
  constructor(public ruta: Router, private instr: InstruccionesComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.bol = !this.bol;
    }, 3000);
    AOS.init();
  }

  agregar_text(entrada:any) {
    InstruccionesComponent.valor=entrada;
    this.ruta.navigateByUrl("/instrucciones");
  }

}
