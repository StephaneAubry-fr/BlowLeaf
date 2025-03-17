import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenViewComponent } from './garden-view.component';
import { Garden } from '../../model/garden';

describe('GardenViewComponent', () => {
  let component: GardenViewComponent;
  let fixture: ComponentFixture<GardenViewComponent>;
  let garden = new Garden(2,3);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenViewComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('garden', garden);
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    //input -> fn()
    //console.log(component.garden());
    expect(component.garden().width).toBe(2);
    expect(component.garden().height).toBe(3);
  });
});
