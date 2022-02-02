import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  ubicacionPrincipal = window.pageYOffset; //Empieza midiendo 0

//inicializando las animaciones ventanas
/* window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(this.ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px" 
    }
    else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    //Le volvemos a dar la ubicación principal para que se actualice constantemente
    this.ubicacionPrincipal = desplazamientoActual; 
}); */


//----------------------------Menu abrir y cerrar--------------------------------//
enlacesMenu = document.querySelectorAll(".opciones-menu")[0];
semaforo = true;

/* abrir(){
    if(this.semaforo){
        document.querySelectorAll(".menu")[0].style.color="#fff";
        this.semaforo = false;
    }
    else{
        document.querySelectorAll(".menu")[0].style.color="#000";
        this.semaforo = true;
    }
    this.enlacesMenu.classList.toggle("menudos")
} */





}
