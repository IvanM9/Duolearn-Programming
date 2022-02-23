import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  faPlus = iconos.faPlusCircle;
  faCerrarSesion = iconos.faSignOutAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
