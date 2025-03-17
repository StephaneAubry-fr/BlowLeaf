import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlowCtrlComponent } from './blow-ctrl.component';

describe('BlowCtrlComponent', () => {
  let component: BlowCtrlComponent;
  let fixture: ComponentFixture<BlowCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlowCtrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlowCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
