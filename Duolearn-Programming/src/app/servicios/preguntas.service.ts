import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preguntas } from './preguntas';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  //Api:string='http://localhost:8080/basedatos/';

  Api: string = "http://localhost:2000/api/";


  constructor(private clientHttp:HttpClient) { }

  obtener_pregunta():Observable<any>{
    return this.clientHttp.get(this.Api+"preguntas");
  }

  obtener_pregunta3():Observable<any>{
    return this.clientHttp.get(this.Api+"preguntas4");
  }

  obtener_preguntadd():Observable<any>{
    return this.clientHttp.get(this.Api+"preguntasdd");
  }


  get_questions(tipo:any):Observable<any>{
    return this.clientHttp.post(this.Api+"actividades/obtener",tipo);
  }

  send_solves():Observable<any>{
    return this.clientHttp.post(this.Api+"actividades/resolver","");
  }


}
