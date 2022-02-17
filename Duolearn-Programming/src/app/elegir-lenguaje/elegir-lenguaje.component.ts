import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-elegir-lenguaje',
  templateUrl: './elegir-lenguaje.component.html',
  styleUrls: ['./elegir-lenguaje.component.css']
})
export class ElegirLenguajeComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  redirigir(lenguaje:any) {
    sessionStorage.setItem("lenguaje",lenguaje);
    this.ruta.navigateByUrl("/dashboard");
  }
}
