import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PreloaderService } from '../servicios/preloader.service';

@Injectable()
export class LoginResolver implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<any>>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.preload_service.stop();
        resolve(of(['item1', 'item2']));
      }, 3000);
    });
  }

  constructor(private preload_service: PreloaderService) { }
}
