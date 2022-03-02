import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-olvide-contrasenia',
  templateUrl: './olvide-contrasenia.component.html',
  styleUrls: ['./olvide-contrasenia.component.css']
})
export class OlvideContraseniaComponent implements OnInit {

  @ViewChild("usuario") public usuario: ElementRef;
  @ViewChild("password") public password: ElementRef;

  token = false;

  reset_token;

  constructor(private ruta_activa: ActivatedRoute, public user_ser: UsuariosService, public ruta: Router) { }

  ngOnInit(): void {
    this.reset_token = this.ruta_activa.snapshot.paramMap.get('token');
    if (this.reset_token != 0) {
      this.token = true;
    }
  }

  reseteo() {
    if (this.reset_token != 0) {
      this.user_ser.resetea_password({ usuario: this.usuario.nativeElement.value, nueva_clave: this.password.nativeElement.value }, this.reset_token).subscribe(resp => {
        //console.log(resp);
        if (resp.estado == 1) {
          this.mensaje_bien("Se ha cambiado la contraseña", 1500)
          setTimeout(() => {
            this.ruta.navigateByUrl("/principal");
          }, 5000);
          this.ruta.navigateByUrl("/principal");
        } else {
          this.mensaje_mal("No se ha cambiado la contraseña");
          this.usuario.nativeElement.value = "";
          this.password.nativeElement.value = "";
        }
      });
    } else {
      this.user_ser.solicita_password(this.usuario.nativeElement.value).subscribe(resp => {
        //console.log(resp);
        if (resp.estado == 1) {
          this.mensaje_bien("Se ha enviado un link al correo asociado con el nombre de usuario", 3000);
          setTimeout(() => {
            this.ruta.navigateByUrl("/principal");
          }, 5000);
          this.usuario.nativeElement.value = "";
        } else {
          this.mensaje_mal("No se ha encontrado el usuario");
          this.usuario.nativeElement.value = "";
        }
      });
    }
  }

  mensaje_bien(mensaje: any, tiempo: any) {
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: tiempo
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

}
