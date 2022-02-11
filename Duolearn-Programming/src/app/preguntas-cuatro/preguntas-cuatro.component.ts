import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-preguntas-cuatro',
  templateUrl: './preguntas-cuatro.component.html',
  styleUrls: ['./preguntas-cuatro.component.css']
})
export class PreguntasCuatroComponent implements OnInit {


  faQuestion = iconos.faQuestionCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
