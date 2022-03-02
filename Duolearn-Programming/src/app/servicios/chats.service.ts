import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(public clientHttp:HttpClient) { }

  Api: string = "http://localhost:2000/api";

  send_message(datos:any):Observable<any>{
    return this.clientHttp.post(this.Api+"/chat/nuevo",datos);
  }

  get_messages():Observable<any>{
    return this.clientHttp.get(this.Api+"/chat/obtener");
  }
}
