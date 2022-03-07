import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { ChatsService } from '../servicios/chats.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-foro-discusion',
  templateUrl: './foro-discusion.component.html',
  styleUrls: ['./foro-discusion.component.css']
})
export class ForoDiscusionComponent implements AfterViewInit {

  //chats
  chats: any = [];
  //estilos
  chat_estilo;

  @ViewChild("mensaje_enviar") public mensaje: ElementRef;
  @ViewChild("contenido") public contenido: ElementRef;


  fapaperplane = iconos.faPaperPlane;
  facomments = iconos.faComments;



  constructor(private chat_serv: ChatsService) { }

  ngAfterViewInit(): void {
    this.chat_serv.get_messages().subscribe(resp => {
      this.chats = resp;
    });
    setInterval(() => {
      window.setTimeout(() => {
        this.chat_serv.get_messages().subscribe(resp => {
          this.chats = resp;
        });
      }, 500);
    }, 500);
  }

  devuelve_estilo(user: any): any {
    if (user != sessionStorage.getItem("user")) {
      return "mensajes-otros-usuarios";
    } else {
      return "mensajes-usuario-actual";
    }
  }

  scrollToTop() {
    document.getElementById("#contenido").scroll(20,20);
  }

  hoy = new Date();

  enviar_mensaje() {
    this.contenido;
    var fecha = this.hoy.getFullYear() + '-' + (this.hoy.getMonth() + 1) + '-' + this.hoy.getDate();
    if (this.mensaje.nativeElement.value != "") {
      this.chat_serv.send_message({ usuario: sessionStorage.getItem("user"), mensaje: this.mensaje.nativeElement.value, fecha: fecha }).subscribe(resp => {
        //console.log(resp);
      });
    }
    this.mensaje.nativeElement.value = "";
  }

}
