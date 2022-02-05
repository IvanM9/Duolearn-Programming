import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirLenguajeComponent } from './elegir-lenguaje.component';

describe('ElegirLenguajeComponent', () => {
  let component: ElegirLenguajeComponent;
  let fixture: ComponentFixture<ElegirLenguajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirLenguajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
