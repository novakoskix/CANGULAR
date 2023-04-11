import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CANGULARComponent } from './cangular.component';

describe('CANGULARComponent', () => {
  let component: CANGULARComponent;
  let fixture: ComponentFixture<CANGULARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CANGULARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CANGULARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
