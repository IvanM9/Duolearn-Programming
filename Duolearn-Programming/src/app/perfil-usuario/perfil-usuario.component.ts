import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements AfterViewInit {
  form_clave: boolean = true;
  bolean: boolean = true;
  form_registro: FormGroup;
  form_contra: FormGroup;
  fanombre = iconos.faClosedCaptioning;

  constructor(
    public formulario_registro: FormBuilder,
    public formulario_password: FormBuilder,
    public user_Service: UsuariosService,
    public ruta: Router) {

    this.form_registro = this.formulario_registro.group({
      correo: [''],
      usuario: [''],
      fecha_nacimiento: [''],
      nombres: [''],
      apellidos: ['']
    });

    this.form_contra = this.formulario_password.group({
      clave_actual: [''],
      clave_nueva1: [''],
      clave_nueva: ['']
    });

    //asigna valores al form
    user_Service.get_user({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
      this.form_registro.setValue({
        correo: resp.correo,
        usuario: sessionStorage.getItem("user"),
        fecha_nacimiento: resp.fecha_nacimiento,
        nombres: resp.nombres,
        apellidos: resp.apellidos,
      });

    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.bolean = !this.bolean;
    }, 1250);
  }

  update_info() {
    this.user_Service.update_info(this.form_registro.value).subscribe(resp => {
      if (resp.estado == 1) {
        this.mensaje_bien("Se ha modificado");
        setTimeout(() => {
          this.ruta.navigateByUrl("/dashboard");
        }, 1500);
      } else {
        this.mensaje_mal("No se ha modificado");
        setTimeout(() => {
          this.ruta.navigateByUrl("/mi-perfil");
        }, 1500);
      }
    });
  }

  update_password(){
    if(this.form_contra.value.clave_nueva1==this.form_contra.value.clave_nueva){
      this.user_Service.update_pass(this.crearjson()).subscribe(resp=>{
        if (resp.estado == 1) {
          this.mensaje_bien("SE HA MODIFICADO");
          setTimeout(() => {
            this.ruta.navigateByUrl("/dashboard");
          }, 1500);
        } else {
          this.mensaje_mal("NO SE HA MODIFICADO");
          setTimeout(() => {
            this.ruta.navigateByUrl("/mi-perfil");
          }, 1500);
        }
      });
    }
  }

  crearjson():any{
    return {usuario:sessionStorage.getItem("user"), clave_actual:this.form_contra.value.clave_actual, clave_nueva:this.form_contra.value.clave_nueva}
  }

  mensaje_bien(mensaje: any) {
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
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

  mostrarCambioClave() {
    this.form_clave = this.form_clave ? false : true;
  }



}
