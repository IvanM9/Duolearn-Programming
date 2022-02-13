import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, PreloadAllModules, Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import Swal from 'sweetalert2';
import { PreLoaderComponent } from '../pre-loader/pre-loader.component';

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

  @ViewChild("container") public contenedor: ElementRef;
  constructor(public ruta: Router,
    public formulario: FormBuilder,
    public formulario_registro: FormBuilder,
    private user_service: UsuariosService,
    public activatedRoute:ActivatedRoute) {
    this.form_login = this.formulario.group({
      usuario: [''],
      password: ['']
    });
    this.form_registro = this.formulario_registro.group({
      correo: [''],
      celular: [''],
      usuario: [''],
      password: ['']
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.bol=!this.bol;
    }, 3000);
  }

  login() {
    this.user_service.iniciar_sesion(this.form_login.value).subscribe(resp =>{
      let val = resp.success;
      if (val == 1) {
        this.mensaje_bien();
        this.ruta.navigateByUrl("/elegir-lenguaje");
      } else {
        this.mensaje_mal();
        this.ruta.navigateByUrl("/login");
      }
    });
  }

  registro_user(): any {
    this.user_service.registrarse(this.form_registro.value).subscribe(resp => {
      //console.log(resp);
      let val = resp.success;
      if (val == 1) {
        this.mensaje_bien();
        this.ruta.navigateByUrl("/elegir-lenguaje");
      } else {
        this.mensaje_mal();
        this.ruta.navigateByUrl("/login");
      }
    });
  }

  mensaje_bien() {
    Swal.fire({
      title: 'REDIRECCIONANDO',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    })
  }
  mensaje_mal() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo ha salido, intentalo más tarde'
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
