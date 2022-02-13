import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mapa-preguntas',
  templateUrl: './mapa-preguntas.component.html',
  styleUrls: ['./mapa-preguntas.component.css']
})
export class MapaPreguntasComponent implements OnInit {

  faVisto = iconos.faCheckCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
