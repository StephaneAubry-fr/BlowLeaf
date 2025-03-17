import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlowCtrlComponent } from './blow-ctrl.component';
import { Garden } from '../../model/garden';

describe('BlowCtrlComponent', () => {
  let component: BlowCtrlComponent;
  let fixture: ComponentFixture<BlowCtrlComponent>;

  let garden = new Garden({} as Garden);
  garden.init(2,3);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlowCtrlComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlowCtrlComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('garden', garden);
    fixture.detectChanges();

    //await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
