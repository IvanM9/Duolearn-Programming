import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css']
})
export class PreLoaderComponent implements OnInit {

  constructor(public ruta:Router ) { }

  ngOnInit(): void {
    Aos.init();
  }

  
   MostrarDashBoard(){
    this.ruta.navigateByUrl("dashboard");
  } 
  contenedorLoader:any;
  
  cargando(){
    this.contenedorLoader = document.querySelector('.contenedorLoader')
    //contenedorLoader.style.opacity =0;
    this.contenedorLoader.style.visibility = ''
    setTimeout(this.MostrarDashBoard, 3000);
  }

  MostrarElegirLenguaje() {
    
    this.ruta.navigateByUrl("/login");
  }

  
}
