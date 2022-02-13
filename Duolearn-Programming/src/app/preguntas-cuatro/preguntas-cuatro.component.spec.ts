import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasCuatroComponent } from './preguntas-cuatro.component';

describe('PreguntasCuatroComponent', () => {
  let component: PreguntasCuatroComponent;
  let fixture: ComponentFixture<PreguntasCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
