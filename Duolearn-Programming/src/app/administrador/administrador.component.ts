import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { PreguntasService } from '../servicios/preguntas.service';
import { TemasService } from '../servicios/temas.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements AfterViewInit {

  @ViewChild("escoge1") public select1: ElementRef;

  seleccionado = 0;
  tema_select = 0;
  faPlus = iconos.faPlusCircle;
  faCerrarSesion = iconos.faSignOutAlt;


  constructor(public tema_serv:TemasService, public act_serv:PreguntasService) { }

  ngAfterViewInit(): void {
    
  }



  vista_preliminar1 = (event) => {
    let id_img = document.getElementById('img-vista-previa1');
    let path=URL.createObjectURL(event.target.files[0]);
    id_img.setAttribute("src", path);
    //img2
    let id_img2 = document.getElementById('img-vista-previa2');
    let path2=URL.createObjectURL(event.target.files[0]);
    id_img.setAttribute("src", path2);
  }

  vista_preliminar2 = (event) => {
    let id_img = document.getElementById('img-vista-previa2');
    let path=URL.createObjectURL(event.target.files[0]);
    id_img.setAttribute("src", path);
  }

  vista_preliminar3 = (event) => {
    let id_img = document.getElementById('img-vista-previa3');
    let path=URL.createObjectURL(event.target.files[0]);
    id_img.setAttribute("src", path);
  }

  send_question(){
    if(this.seleccionado==1){
      this.act_serv.realiza_pregunta("").subscribe();
    }else if(this.seleccionado==2){
      
    }else if(this.seleccionado==3){
      
    }else if(this.seleccionado==4){
      
    }else if(this.seleccionado==5){
      
    }
  }

}
