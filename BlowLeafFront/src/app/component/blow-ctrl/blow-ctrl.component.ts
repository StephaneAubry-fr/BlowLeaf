import { Component, input, output } from '@angular/core';
import { BlowService, BlowDirection } from "../../service/blow.service";
import { Garden } from '../../model/garden';

@Component({
  selector: 'app-blow-ctrl',
  imports: [],
  templateUrl: './blow-ctrl.component.html',
  styleUrl: './blow-ctrl.component.css'
})
export class BlowCtrlComponent {
  garden = input.required<Garden>();
  onGardenUpdate = output<Garden>();
  msg = "";

  constructor(private svc: BlowService){
      this.svc.ping().subscribe(res => {this.msg = res;});
    }

  blowRight() {
    this.blow(BlowDirection.right);
  }

  blowLeft() {
    this.blow(BlowDirection.left);
  }

  blowUp() {
    this.blow(BlowDirection.up);
  }

  blowDown() {
    this.blow(BlowDirection.down);
  }

  private blow(dir: BlowDirection) {
    this.svc.blow(dir, this.garden()).subscribe(res => {this.emitGarden(res);});
  }

  private emitGarden(result: Garden) {
    console.log("emit");
    this.onGardenUpdate.emit(result as Garden);
  }

}
