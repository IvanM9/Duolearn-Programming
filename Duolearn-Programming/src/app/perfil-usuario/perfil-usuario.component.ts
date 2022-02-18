import { Component, OnInit } from '@angular/core';
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
export class PerfilUsuarioComponent implements OnInit {
  form_clave: boolean = true;
  form_registro: FormGroup;
  fanombre = iconos.faClosedCaptioning;
  constructor(
    public formulario_registro: FormBuilder,
    public user_Service: UsuariosService,
    public ruta: Router) {
    this.form_registro = this.formulario_registro.group({
      correo: [''],
      usuario: [''],
      fecha_nacimiento: [''],
      nombres: [''],
      apellidos: [''],
      clave: ['']
    });
    //asigna valores al form
    user_Service.get_user({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
      this.form_registro.setValue({
        correo: resp.correo,
        usuario: sessionStorage.getItem("user"),
        fecha_nacimiento: resp.fecha_nacimiento,
        nombres: resp.nombres,
        apellidos: resp.apellidos,
        clave: ['']
      });
    });
  }

  update_info() {
    this.user_Service.update_info(this.form_registro.value).subscribe(resp => {
      if (resp.estado == 1) {
        this.mensaje_bien(resp.mensaje);
        setTimeout(() => {
          this.ruta.navigateByUrl("/dashboard");
        }, 1500);
      } else {
        this.mensaje_mal(resp.mensaje);
        setTimeout(() => {
          this.ruta.navigateByUrl("/mi-perfil");
        }, 1500);
      }
    });
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
  ngOnInit(): void {
  }

}
