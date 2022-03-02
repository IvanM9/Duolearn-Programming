import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private clientHttp:HttpClient) { }

  Api: string = environment.api;

  obtener_est_java(user:any):Observable<any>{
    return this.clientHttp.get(this.Api+"/usuario/estadisticas_java/"+user.usuario);
  }

  obtener_est_csh(user:any):Observable<any>{
    return this.clientHttp.get(this.Api+"/usuario/estadisticas_csharp/"+user.usuario);
  }

}
