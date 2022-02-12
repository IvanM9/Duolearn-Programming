import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-preguntas-tres',
  templateUrl: './preguntas-tres.component.html',
  styleUrls: ['./preguntas-tres.component.css']
})
export class PreguntasTresComponent implements AfterViewInit {
  @ViewChild("opcion1") public opcion1: ElementRef;
  @ViewChild("opcion2") public opcion2: ElementRef;
  @ViewChild("opcion3") public opcion3: ElementRef;
  @ViewChild("opcion4") public opcion4: ElementRef;
  @ViewChild("texto1") public texto1: ElementRef;
  @ViewChild("texto2") public texto2: ElementRef;
  @ViewChild("texto3") public texto3: ElementRef;
  @ViewChild("texto4") public texto4: ElementRef;

  faQuestion = iconos.faQuestionCircle;

  constructor() { }

  ngAfterViewInit(): void {


  }

  elemn:any;

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("entra "+this.elemn+"en el "+ev.target.id);
    ev.target.appendChild(document.getElementById(this.elemn));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    this.elemn=ev.target.id;
    let a=0;
  }

}
