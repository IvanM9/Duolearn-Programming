import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronasComponent } from './coronas.component';

describe('CoronasComponent', () => {
  let component: CoronasComponent;
  let fixture: ComponentFixture<CoronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
