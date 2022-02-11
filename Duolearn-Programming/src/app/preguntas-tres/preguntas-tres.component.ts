import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-preguntas-tres',
  templateUrl: './preguntas-tres.component.html',
  styleUrls: ['./preguntas-tres.component.css']
})
export class PreguntasTresComponent implements OnInit {

  faQuestion = iconos.faQuestionCircle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
