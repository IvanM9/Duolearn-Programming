import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { PreguntasService } from '../servicios/preguntas.service';
import { TemasService } from '../servicios/temas.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements AfterViewInit {

  //cuestionario
  @ViewChild("escoge1") public select1: ElementRef;
  @ViewChild("pregunta_cuestionario") public pregunta_cuest: ElementRef;
  @ViewChild("opcion_a_cuestionario") public opcion_a_cuestionario: ElementRef;
  @ViewChild("opcion_b_cuestionario") public opcion_b_cuestionario: ElementRef;
  @ViewChild("opcion_c_cuestionario") public opcion_c_cuestionario: ElementRef;
  @ViewChild("opcion_d_cuestionario") public opcion_d_cuestionario: ElementRef;

  //encontrar-error
  @ViewChild("imagen3") public imagen3: ElementRef;
  @ViewChild("opcion_a_error") public opcion_a_error: ElementRef;
  @ViewChild("opcion_b_error") public opcion_b_error: ElementRef;
  @ViewChild("opcion_c_error") public opcion_c_error: ElementRef;
  @ViewChild("opcion_d_error") public opcion_d_error: ElementRef;

  seleccionado = 0;
  tema_select = 0;
  Temas: any;
  faPlus = iconos.faPlusCircle;
  faCerrarSesion = iconos.faSignOutAlt;
  img1;
  img2;
  img3;

  constructor(public tema_serv: TemasService, public act_serv: PreguntasService, public ruta: Router) { }

  ngAfterViewInit(): void {
    this.tema_serv.listar_temas().subscribe(resp => {
      this.Temas = resp;
      for (let index = 0; index < this.Temas.length; index++) {
        if (this.Temas[index]["lenguaje"] == "csh") {
          this.Temas[index]["lenguaje"] = "C#";
        }
      }
    });
  }



  vista_preliminar1 = (event) => {
    let id_img = document.getElementById('img-vista-previa1');
    let path = URL.createObjectURL(event.target.files[0]);
    id_img.setAttribute("src", path);
    console.log(event.target.files);
    this.img1 = event.target.files[0];
  }

  vista_preliminar2 = (event) => {
    let id_img = document.getElementById('img-vista-previa2');
    let path = URL.createObjectURL(event.target.files[0]);
    this.img2 = event.target.files[0];
    console.log(event.target.files);
    id_img.setAttribute("src", path);
  }

  vista_preliminar3 = (event) => {
    let id_img = document.getElementById('img-vista-previa3');
    this.img3 = event.target.files[0];
    let path = URL.createObjectURL(event.target.files[0]);
    id_img.setAttribute("src", path);
  }

  formData = new FormData();

  valida_campos(preg: any): boolean {
    switch (preg) {
      case 1:
        if (this.pregunta_cuest.nativeElement.value != "" && this.opcion_a_cuestionario.nativeElement.value != ""
          && this.opcion_b_cuestionario.nativeElement.value != "" && this.opcion_c_cuestionario.nativeElement.value != ""
          && this.opcion_d_cuestionario.nativeElement.value != "") {
          return true;
        } else {
          return false;
        }
      case 2:
        if (this.img1 != null && this.img2 != null) {
          return true;
        } else {
          return false;
        }
      case 3:
        if (this.pregunta_cuest.nativeElement.value != "" && this.opcion_a_cuestionario.nativeElement.value != ""
          && this.opcion_b_cuestionario.nativeElement.value != "" && this.opcion_c_cuestionario.nativeElement.value != ""
          && this.opcion_d_cuestionario.nativeElement.value != "") {
          return true;
        } else {
          return false;
        }
      case 4:
        if (this.img3 != null && this.opcion_a_error.nativeElement.value != ""
          && this.opcion_b_error.nativeElement.value != "" && this.opcion_c_error.nativeElement.value != ""
          && this.opcion_d_error.nativeElement.value != "") {
          return true;
        } else {
          return false;
        }
    }

  }

  valida_dragandrop():boolean{
    let v=this.pregunta_cuest.nativeElement.value.split("\n");
    if(v.length==4){
      for (let index = 0; index < v.length; index++) {
        if(v[index]==""){
          return false;
        }
      }
      return true;
    }else{
      return false;
    }
  }

  send_question() {
    if (this.seleccionado == 0 || this.tema_select == 0) {
      if (this.seleccionado == 0) {
        this.mensaje_mal("INGRESA LA PREGUNTA");
      } else if (this.tema_select == 0) {
        this.mensaje_mal("SELECCIONE UN TEMA");
      }

    } else {
      if (this.seleccionado == 2) {
        if (this.valida_campos(1)) {
          this.act_serv.realiza_pregunta({
            tema: this.tema_select,
            pregunta: this.pregunta_cuest.nativeElement.value.trim(),
            opcion_correcta: this.opcion_a_cuestionario.nativeElement.value.trim(),
            opcion2: this.opcion_b_cuestionario.nativeElement.value.trim(),
            opcion3: this.opcion_c_cuestionario.nativeElement.value.trim(),
            opcion4: this.opcion_d_cuestionario.nativeElement.value.trim(),
            tipo: "cuestionario"
          }).subscribe(resp => {
            if (resp.estado == 1) {
              this.mensaje_bien("Se ha agregado la pregunta");
            } else {
              this.mensaje_mal("No se agrego la pregunta");
            }
            this.seleccionado = 0;
            this.tema_select = 0;
          });
        } else {
          this.mensaje_mal("Agregue todos los campos");
        }

      } else if (this.seleccionado == 3) {
        if (this.valida_campos(2)) {
          this.formData.append("tema", this.tema_select.toString());
          this.formData.append("images", this.img1);
          this.formData.append("images", this.img2);
          this.formData.append("tipo", "pares");
          this.act_serv.realiza_pregunta(this.formData).subscribe(resp => {
            if (resp.estado == 1) {
              this.mensaje_bien("Se ha agregado la pregunta");
            } else {
              this.mensaje_mal("No se agrego la imagen");
            }
            this.seleccionado = 0;
            this.tema_select = 0;
          });
        } else {
          this.mensaje_mal("Agregue las imagenes requeridas");
        }
      } else if (this.seleccionado == 4) {
        if (this.valida_campos(3)) {
          if(this.valida_dragandrop()==false){
            this.mensaje_mal("Deben ser 4 lineas de pregunta");
          }else{
            this.act_serv.realiza_pregunta({
              tema: this.tema_select,
              pregunta: this.pregunta_cuest.nativeElement.value.trim(),
              opcion_correcta: this.opcion_a_cuestionario.nativeElement.value.trim(),
              opcion2: this.opcion_b_cuestionario.nativeElement.value.trim(),
              opcion3: this.opcion_c_cuestionario.nativeElement.value.trim(),
              opcion4: this.opcion_d_cuestionario.nativeElement.value.trim(),
              tipo: "drag-and-drop"
            }).subscribe(resp => {
              if (resp.estado == 1) {
                this.mensaje_bien("Se ha agregado la pregunta");
              } else {
                this.mensaje_mal("No se agrego la pregunta");
              }
              this.seleccionado = 0;
              this.tema_select = 0;
            });
          }
          console.log(this.pregunta_cuest.nativeElement);
        } else {
          this.mensaje_mal("Ingrese todos los campos necesarios");
        }
      } else if (this.seleccionado == 5) {
        if (this.valida_campos(4)) {
          this.formData.append("tema", this.tema_select.toString());
          this.formData.append("images", this.img3);
          this.formData.append("opcion_correcta", this.opcion_a_error.nativeElement.value.trim());
          this.formData.append("opcion2", this.opcion_b_error.nativeElement.value.trim());
          this.formData.append("opcion3", this.opcion_c_error.nativeElement.value.trim());
          this.formData.append("opcion4", this.opcion_d_error.nativeElement.value.trim());
          this.formData.append("tipo", "encontrar-error");
          this.act_serv.realiza_pregunta(this.formData).subscribe(resp => {
            if (resp.estado == 1) {
              this.mensaje_bien("Se ha agregado la pregunta");
            } else {
              this.mensaje_mal("No se agrego la imagen");
            }
            this.seleccionado = 0;
            this.tema_select = 0;
          });
        } else {
          this.mensaje_mal("Ingrese todos los campos");
        }
      }
      this.formData = new FormData();
    }
  }

  close_session() {
    sessionStorage.clear();
    this.ruta.navigateByUrl("/principal");
  }

  mensaje_bien(mensaje: any) {
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 2000
    })
  }

  placeholder(){
    
  }

  mensaje_mal(mensaje: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensaje,
      showConfirmButton: false,
      timer: 1500
    });
  }

}