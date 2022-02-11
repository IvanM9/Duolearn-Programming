import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-preguntas-dos',
  templateUrl: './preguntas-dos.component.html',
  styleUrls: ['./preguntas-dos.component.css']
})
export class PreguntasDosComponent implements OnInit {

  faQuestion = iconos.faQuestionCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
