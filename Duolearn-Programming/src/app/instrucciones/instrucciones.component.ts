import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {
  public static valor: string;
  public valor_2: string;

@Output () dispa:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    this.valor_2=InstruccionesComponent.valor;
    //sessionStorage.getItem("user");
  }

}
