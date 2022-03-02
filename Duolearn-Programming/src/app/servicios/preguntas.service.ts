import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  Api: string = environment.api;

  constructor(private clientHttp: HttpClient) { }

  get_questions(datos: any): Observable<any> {
    return this.clientHttp.post(this.Api + "/actividades/obtener", datos);
  }

  send_solves(datos: any): Observable<any> {
    return this.clientHttp.post(this.Api + "/actividades/resolver", datos);
  }

  realiza_pregunta(datos: any): Observable<any> {
    return this.clientHttp.post(this.Api + "/admin/actividades/agregar", datos);
  }
}
