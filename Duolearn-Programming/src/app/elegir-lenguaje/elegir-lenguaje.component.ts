import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-elegir-lenguaje',
  templateUrl: './elegir-lenguaje.component.html',
  styleUrls: ['./elegir-lenguaje.component.css']
})
export class ElegirLenguajeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
