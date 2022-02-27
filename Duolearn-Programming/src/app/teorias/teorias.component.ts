import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TemasService } from '../servicios/temas.service';

@Component({
  selector: 'app-teorias',
  templateUrl: './teorias.component.html',
  styleUrls: ['./teorias.component.css']
})
export class TeoriasComponent implements OnInit {

  //nombre modulo
  modulo = sessionStorage.getItem("modulo");
  //temas
  temas: any;
  //checkbox del diseño
  @ViewChild("checkbox") public checkbox: ElementRef;

  constructor(public temaserv: TemasService, public ruta: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("check"+"-"+sessionStorage.getItem("modulo")+"-"+sessionStorage.getItem("lenguaje")+"-"+sessionStorage.getItem("user"))=="true"+"-"+sessionStorage.getItem("modulo")+"-"+sessionStorage.getItem("lenguaje")+"-"+sessionStorage.getItem("user")) {
      this.ruta.navigateByUrl("/mapa-preguntas");
    } else {
      this.temaserv.obtener_temas({ 'modulo': sessionStorage.getItem("num_mod"), 'lenguaje': sessionStorage.getItem("lenguaje") }).subscribe(resp => {
        this.temas = resp;
      });
    }
  }

  //envia a mapa de preguntas
  redirecciona() {
    sessionStorage.setItem("check"+"-"+sessionStorage.getItem("modulo")+"-"+sessionStorage.getItem("lenguaje")+"-"+sessionStorage.getItem("user"),this.checkbox.nativeElement.checked+"-"+sessionStorage.getItem("modulo")+"-"+sessionStorage.getItem("lenguaje")+"-"+sessionStorage.getItem("user"));
    this.ruta.navigateByUrl("/mapa-preguntas")
  }

}
