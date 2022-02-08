import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { PreLoaderComponent } from '../pre-loader/pre-loader.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public ruta: Router) { }

  ngOnInit(): void {
    AOS.init();
  }
  login() {
    PreLoaderComponent.vari = 1;
    this.ruta.navigateByUrl("/preloader");
  }
}
