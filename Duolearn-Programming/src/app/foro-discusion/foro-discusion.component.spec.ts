import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoDiscusionComponent } from './foro-discusion.component';

describe('ForoDiscusionComponent', () => {
  let component: ForoDiscusionComponent;
  let fixture: ComponentFixture<ForoDiscusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoDiscusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoDiscusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
