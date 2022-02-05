import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  Api:string='http://localhost:8080/basedatos/';

  constructor(private clientHttp:HttpClient) { }

  iniciar_sesion(datos_login:Usuarios):Observable<any>{
    return this.clientHttp.post(this.Api+"?login",datos_login); 
  }

  registrarse(datos_registro:Usuarios):Observable<any>{
    return this.clientHttp.post(this.Api+"?registro",datos_registro,{responseType: 'text'});
  }

}
