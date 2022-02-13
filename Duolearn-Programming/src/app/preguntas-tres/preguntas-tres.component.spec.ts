import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasTresComponent } from './preguntas-tres.component';

describe('PreguntasTresComponent', () => {
  let component: PreguntasTresComponent;
  let fixture: ComponentFixture<PreguntasTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
