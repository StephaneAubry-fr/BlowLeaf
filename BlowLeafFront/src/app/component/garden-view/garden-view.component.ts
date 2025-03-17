import { Component, input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Garden } from '../../model/garden';

@Component({
  selector: 'app-garden-view',
  imports: [MatGridListModule],
  templateUrl: './garden-view.component.html',
  styleUrl: './garden-view.component.css'
})
export class GardenViewComponent {
  garden = input.required<Garden>();



}
