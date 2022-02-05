import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("container") public contenedor: ElementRef;

  constructor(public ruta: Router) { }

  ngOnInit(): void {
  }


  MostrarElegirLenguaje() {
    this.ruta.navigateByUrl("/elegir-lenguaje");
  }

  MostrarDashBoard() {
    this.ruta.navigateByUrl("/dashboard");
  }

  //Cambiamos el nombre de la clase container verificando donde se clickea
  ingres() {
    this.contenedor.nativeElement.classList.remove("modo-registrarse");
  }
  registro() {
    this.contenedor.nativeElement.classList.add("modo-registrarse");
  }
}
