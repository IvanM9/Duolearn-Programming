import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css']
})
export class PreLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* window.addEventListener('load',()=>{
    contenedorLoader = document.querySelector('.contenedorLoader')
    //contenedorLoader.style.opacity =0;
    contenedorLoader.style.visibility = ''
    setTimeout(MostrarDashBoard, 3000);
  })

  function MostrarDashBoard(){
    ruta: RouterLink;
    ruta ='../plantillas/dashboard.html';
    
  } */


  
}
