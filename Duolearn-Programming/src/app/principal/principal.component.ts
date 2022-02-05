import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public semaforo = true;
  enlacesMenu = document.querySelectorAll(".opciones-menu")[0];


  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }



  abrir() {
    if (this.semaforo) {

      this.semaforo = false;
    }
    else {

      this.semaforo = true;
    }
  }

  ubicacionPrincipal = window.pageYOffset; //Empieza midiendo 0
  menuArriba() {
    let desplazamientoActual = window.pageYOffset;
    if (this.ubicacionPrincipal >= desplazamientoActual) {
      document.getElementsByTagName("nav")[0].style.top = "0px"
    }
    else {
      document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    //Le volvemos a dar la ubicación principal para que se actualice constantemente
    this.ubicacionPrincipal = desplazamientoActual;
  }



}
