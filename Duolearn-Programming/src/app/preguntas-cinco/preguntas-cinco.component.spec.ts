import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasCincoComponent } from './preguntas-cinco.component';

describe('PreguntasCincoComponent', () => {
  let component: PreguntasCincoComponent;
  let fixture: ComponentFixture<PreguntasCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
