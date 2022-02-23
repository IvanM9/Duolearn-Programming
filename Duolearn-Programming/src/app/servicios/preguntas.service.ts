import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  //Api:string='http://localhost:8080/basedatos/';

  Api: string = "http://localhost:2000/api/";


  constructor(private clientHttp: HttpClient) { }

  get_questions(datos: any): Observable<any> {
    return this.clientHttp.post(this.Api + "actividades/obtener", datos);
  }

  send_solves(datos: any): Observable<any> {
    return this.clientHttp.post(this.Api + "actividades/resolver", datos);
  }

  realiza_pregunta(datos: any): Observable<any> {
    return this.clientHttp.post(this.Api + "admin/actividades/agregar", datos);
  }


}
