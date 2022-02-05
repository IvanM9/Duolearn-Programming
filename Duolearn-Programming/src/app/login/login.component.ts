import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form_login:FormGroup;
form_registro:FormGroup;


  @ViewChild("container") public contenedor: ElementRef;

  constructor(public ruta: Router, 
    public formulario:FormBuilder,
    public formulario_registro:FormBuilder,
    private user_service:UsuariosService) { 
      this.form_login=this.formulario.group({
        usuario:[''],
        password:['']
      });
      this.form_registro=this.formulario_registro.group({
        correo:[''],
        celular:[''],
        usuario:[''],
        password:['']
      });
    }

  ngOnInit(): void {
  }

  login(){
    this.user_service.iniciar_sesion(this.form_login.value).subscribe();
  }

  registro_user():any{
    this.user_service.registrarse(this.form_registro.value).subscribe();
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
