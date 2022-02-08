import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css']
})
export class PreLoaderComponent implements OnInit {
public static vari:any;

  constructor(public ruta: Router) {
    if(PreLoaderComponent.vari=1){
      setTimeout(function(){
        ruta.navigateByUrl("/dashboard");
      },3000);
    }
  }

  ngOnInit(): void {
    Aos.init();
  }


  MostrarDashBoard() {
    this.ruta.navigateByUrl("/dashboard");
  }
  contenedorLoader: any;

  MostrarElegirLenguaje() {

    this.ruta.navigateByUrl("/login");
  }


}
