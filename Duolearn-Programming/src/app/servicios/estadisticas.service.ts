import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private clientHttp:HttpClient) { }

  Api: string = "http://localhost:2000/api/";

  obtener_est_java(user:any):Observable<any>{
    return this.clientHttp.post(this.Api+"usuario/estadisticas_java",user);
  }

  obtener_est_csh(user:any):Observable<any>{
    return this.clientHttp.post(this.Api+"usuario/estadisticas_csharp",user);
  }
}
