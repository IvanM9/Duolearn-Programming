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
    return this.clientHttp.get(this.Api+"/usuario/datos/"+user.usuario);
  }

  update_info(datos_nuevos:Usuarios):Observable<any>{
    return this.clientHttp.put(this.Api+"/usuario/modificar",datos_nuevos);
  }
}
