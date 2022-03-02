import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, PreloadAllModules, Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import * as iconos from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_login: FormGroup;
  form_registro: FormGroup;
  mensaje: any;
  myItems: any;
  bol:boolean=true;

  fanombre = iconos.faClosedCaptioning;

  @ViewChild("container") public contenedor: ElementRef;
  constructor(public ruta: Router,
    public formulario: FormBuilder,
    public formulario_registro: FormBuilder,
    private user_service: UsuariosService,
    public activatedRoute:ActivatedRoute) {
    this.form_login = this.formulario.group({
      usuario: [''],
      clave: ['']
    });
    this.form_registro = this.formulario_registro.group({
      correo: [''],
      usuario: [''],
      fecha_nacimiento: [''],
      nombres: [''],
      apellidos: [''],
      clave: ['']
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.bol=!this.bol;
    }, 1250);
    this.user_service.get_user({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
      if(resp.estado==1){
        if(resp.tipo.trim()=="administrador"){
          this.ruta.navigateByUrl("/administrador");
        }else{
          this.ruta.navigateByUrl("/dashboard");
        }
      }
    });
  }

  login() {
    this.user_service.user_login(this.form_login.value).subscribe(resp =>{
      let val = resp.estado;
      if (val == 1) {
        this.mensaje_bien(resp.mensaje);
        sessionStorage.setItem('user', this.form_login.value.usuario);
        this.user_service.get_user({ usuario: sessionStorage.getItem("user") }).subscribe(resp => {
          if(resp.estado==1){
            if(resp.tipo.trim()=="administrador"){
              this.ruta.navigateByUrl("/administrador");
            }else{
              this.ruta.navigateByUrl("/elegir-lenguaje");
            }
          }
        });
      } else {
        this.mensaje_mal(resp.mensaje);
        this.ruta.navigateByUrl("/login");
      }
    });
  }

  registro_user(): any {
    this.user_service.user_register(this.form_registro.value).subscribe(resp => {
      //console.log(resp);
      let val = resp.estado;
      if (val == 1) {
        this.mensaje_bien("Usuario registrado con éxito");
        this.ruta.navigateByUrl("/login");
        this.ingres();
      } else {
        this.mensaje_mal("Usuario no registrado");
        this.ruta.navigateByUrl("/login");
      }
    });
  }

  mensaje_bien(mensaje:any) {
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  }

  mensaje_mal(mensaje:any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensaje,
      showConfirmButton: false,
      timer: 1500
    });
  }

  MostrarElegirLenguaje() {
    this.ruta.navigateByUrl("/elegir-lenguaje");
  }

  MostrarDashBoard() {
    this.ruta.navigateByUrl("/dashboard");
  }

  //Cambiamos el nombre de la clase container verificando donde se clickea
  ingres() {
    this.contenedor.nativeElement.classList.remove("modo-registrarse");
  }
  registro() {
    this.contenedor.nativeElement.classList.add("modo-registrarse");
  }
}
