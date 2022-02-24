import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

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

  constructor(private ruta_activa: ActivatedRoute, public user_ser: UsuariosService) { }

  ngOnInit(): void {
    this.reset_token = this.ruta_activa.snapshot.paramMap.get('token');
    if (this.reset_token != 0) {
      this.token = true;
    }
  }

  reseteo() {
    if (this.reset_token != 0) {
      this.user_ser.resetea_password({ usuario: this.usuario.nativeElement.value, nueva_clave: this.password.nativeElement.value }, this.reset_token).subscribe(resp => {
        console.log(resp);
      });
    } else {
      this.user_ser.solicita_password(this.usuario.nativeElement.value).subscribe(resp => {
        console.log(resp);
      });
    }
  }


}
