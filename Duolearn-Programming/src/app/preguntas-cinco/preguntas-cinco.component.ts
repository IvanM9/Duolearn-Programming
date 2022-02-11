import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-preguntas-cinco',
  templateUrl: './preguntas-cinco.component.html',
  styleUrls: ['./preguntas-cinco.component.css']
})
export class PreguntasCincoComponent implements OnInit {

  
  faQuestion = iconos.faQuestionCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
