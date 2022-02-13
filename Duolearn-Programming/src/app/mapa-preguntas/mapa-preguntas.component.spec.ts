import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPreguntasComponent } from './mapa-preguntas.component';

describe('MapaPreguntasComponent', () => {
  let component: MapaPreguntasComponent;
  let fixture: ComponentFixture<MapaPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaPreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
