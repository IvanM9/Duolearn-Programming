import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css']
})
export class PreLoaderComponent implements OnInit {
public static vari:any;

  constructor(public ruta: Router) {
    
    if(PreLoaderComponent.vari=1){
      
    }
  }

  ngOnInit(): void {
    Aos.init();
    this.hideSplashAnimation();
  }

  contenedorLoader: any;
  public showSplash = true;

  private hideSplashAnimation() {
    // Setting the transition
    setTimeout(() => {
      // After the transition is ended the showSplash will be hided
      this.showSplash = this.showSplash;
    }, 1500);
  }

  

}
