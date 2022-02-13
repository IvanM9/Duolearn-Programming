import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasDosComponent } from './preguntas-dos.component';

describe('PreguntasDosComponent', () => {
  let component: PreguntasDosComponent;
  let fixture: ComponentFixture<PreguntasDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
