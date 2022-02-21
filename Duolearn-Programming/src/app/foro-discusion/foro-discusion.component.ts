import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-foro-discusion',
  templateUrl: './foro-discusion.component.html',
  styleUrls: ['./foro-discusion.component.css']
})
export class ForoDiscusionComponent implements OnInit {

  fapaperplane = iconos.faPaperPlane;
  facomments = iconos.faComments;
  constructor() { }

  ngOnInit(): void {
  }

}
