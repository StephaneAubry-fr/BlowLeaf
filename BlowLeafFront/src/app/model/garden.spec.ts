import { Garden } from './garden';
import {GardenTile} from './garden-tile'

describe('Garden', () => {
  it('should create an instance of 1x2', () => {
    let garden = new Garden({} as Garden);
    garden.init(2,1);
    garden.setSquare(0,0, 2);
    garden.setSquare(0,1, 7);
    //console.log(garden.toString());
    expect(garden.getSum()).toBe(9);
  });

  it('should create an instance of 2x3', () => {
      let garden = new Garden({} as Garden);
      garden.init(3, 2);
      //console.log(garden.toString());
      expect(garden).toBeTruthy();
    });

  it('should generate tiles in order', () => {
      let garden = new Garden({} as Garden);
      garden.init(3, 3);
      var squares = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        ];
      garden.setSquares(squares);
      console.log(garden.toString());

      let tiles = garden.getTiles();
      for(var tile of tiles) {
        expect(tile.id).toBe(tile.value);
      }

    });
});
