import { Component } from '@angular/core';
import { GardenFormComponent } from '../garden-form/garden-form.component';
import { GardenViewComponent } from '../garden-view/garden-view.component';
import { BlowCtrlComponent } from '../blow-ctrl/blow-ctrl.component';
import { Garden } from '../../model/garden';

@Component({
  selector: 'app-garden-ctrl',
  imports: [GardenFormComponent, GardenViewComponent, BlowCtrlComponent],
  templateUrl: './garden-ctrl.component.html',
  styleUrl: './garden-ctrl.component.css'
})
export class GardenCtrlComponent {
  activeGarden= {} as Garden;
  setActiveGarden(garden: Garden) {
    this.activeGarden = garden;
    console.log(garden.toString());
    }
}
