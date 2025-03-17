import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCtrlComponent } from './garden-ctrl.component';

describe('GardenCtrlComponent', () => {
  let component: GardenCtrlComponent;
  let fixture: ComponentFixture<GardenCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenCtrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
