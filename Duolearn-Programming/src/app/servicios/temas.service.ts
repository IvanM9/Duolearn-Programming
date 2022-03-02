import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  Api: string = "http://localhost:2000/api/";

  constructor(private clientHttp:HttpClient) { }

  obtener_temas(datos:any):Observable<any>{
    return this.clientHttp.post(this.Api+"temas/obtener",datos);
  }

  listar_temas():Observable<any>{
    return this.clientHttp.get(this.Api+"/admin/temas/obtener");
  }

}
