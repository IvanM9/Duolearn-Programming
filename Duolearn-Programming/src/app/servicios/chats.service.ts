import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(public clientHttp:HttpClient) { }

  Api: string = environment.api;

  send_message(datos:any):Observable<any>{
    return this.clientHttp.post(this.Api+"/chat/nuevo",datos);
  }

  get_messages():Observable<any>{
    return this.clientHttp.get(this.Api+"/chat/obtener");
  }
}
