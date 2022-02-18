import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { Router, ActivatedRoute } from '@angular/router';
import { PreLoaderComponent } from '../pre-loader/pre-loader.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public myItems: any;
  bol: boolean = true;
  bol2: boolean = false;
  semaforo = true;
  @ViewChild("opcionesmenu") public enlacesMenu: ElementRef;
  @ViewChild("navegacion") public nav: ElementRef;
  @ViewChild("menu") public menu: ElementRef;

  ubicacionPrincipal = window.pageYOffset; //Empieza midiendo 0

  constructor(public ruta: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init();
    setTimeout(() => {
      this.bol = !this.bol;
      this.bol2=!this.bol2;
    }, 1250);
    if(sessionStorage.getItem("user")!=null){
      this.ruta.navigateByUrl("/dashboard");
    }
  }

  scroll() {
    let desplazamientoActual = window.pageYOffset;
    if (this.ubicacionPrincipal >= desplazamientoActual) {
      this.nav.nativeElement.style.top = "0px";
    }
    else {
      this.nav.nativeElement.style.top = "-100px";
    }
    //Le volvemos a dar la ubicación principal para que se actualice constantemente
    this.ubicacionPrincipal = desplazamientoActual;
  }
  menuclick() {
    if (this.semaforo) {
      this.menu.nativeElement.style.color="#fff";
      this.semaforo = false;
    }
    else {
      this.menu.nativeElement.style.color="#000";
      this.semaforo = true;
    }
    this.enlacesMenu.nativeElement.classList.toggle("menudos");
  }
}
