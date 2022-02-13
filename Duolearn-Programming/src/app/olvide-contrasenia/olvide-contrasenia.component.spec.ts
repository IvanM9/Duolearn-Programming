import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvideContraseniaComponent } from './olvide-contrasenia.component';

describe('OlvideContraseniaComponent', () => {
  let component: OlvideContraseniaComponent;
  let fixture: ComponentFixture<OlvideContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvideContraseniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvideContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
