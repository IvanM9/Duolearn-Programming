import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-coronas',
  templateUrl: './coronas.component.html',
  styleUrls: ['./coronas.component.css']
})
export class CoronasComponent implements OnInit {

  facrown = iconos.faCrown;
  constructor() { }

  ngOnInit(): void {
  }

}
