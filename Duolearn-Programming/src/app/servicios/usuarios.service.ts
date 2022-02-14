import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //Api:string='http://localhost:8080/basedatos/';
  Api:string='http://localhost:2000/api';


  constructor(private clientHttp:HttpClient) { }

  /*iniciar_sesion(datos_login:Usuarios):Observable<any>{
    return this.clientHttp.post(this.Api+"?login",datos_login,{responseType: 'json'}); 
  }

  registrarse(datos_registro:Usuarios):Observable<any>{
    //console.log(datos_registro);
    return this.clientHttp.post(this.Api+"?registro",datos_registro,{responseType: 'json'});
  }*/

  user_login(datos_login:Usuarios):Observable<any>{
    return this.clientHttp.post(this.Api+"/iniciar_sesion",datos_login);
  }

  user_register(datos_registro:Usuarios):Observable<any>{
    return this.clientHttp.post(this.Api+"/usuario/nuevo",datos_registro);
  }

  close_session():Observable<any>{
    return this.clientHttp.get(this.Api+"/cerrar_sesion");
  }
  
  get_user(user:any):Observable<any>{
    return this.clientHttp.post(this.Api+"/usuario/datos",user);
  }
}
