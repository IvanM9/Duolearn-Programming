import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { PrincipalComponent } from '../principal/principal.component';
import { PreloaderService } from '../servicios/preloader.service';

@Injectable({
  providedIn: 'root'
})
export class PreloaderResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<any>>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.preload_service.stop();
        resolve(of([LoginComponent, PrincipalComponent]));
      }, 3000);
    });
  }

  constructor(private preload_service: PreloaderService) { }
}
