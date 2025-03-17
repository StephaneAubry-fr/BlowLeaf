import {GardenTile} from './garden-tile'
const MAX = 10;

export class Garden {
  squares: number[][] = [];
  public width = 0;
  public height = 0;

  constructor(item: Garden) {
    Object.assign(this, item);
  }

  init(width: number, height: number){
    this.width = width;
    this.height = height;

    this.squares = [];

    for(var i=0; i < height; i++){
      var row = [];
      for(var j=0; j < width; j++) {
        var value = Math.floor(Math.random() * MAX);
        row.push(value);
      }
      this.squares.push(row);
    }
  }

  setSquare(row: number, col: number, value: number){
        this.squares[row][col] = value;
    }

  getSquare(row: number, col: number) : number {
        return this.squares[row][col];
    }

  setSquares(squares: number[][]){
    this.squares = squares;
    }

  getSum():number {
    var res=0;
    for(var i=0; i < this.height; i++){
      for(var j=0; j < this.width; j++) {
        res += this.squares[i][j];
      }
    }

    return res;
  }

  getTiles(): GardenTile[] {
    var res = [];
    for(var i=0; i < this.height; i++){
      for(var j=0; j < this.width; j++) {
        var tile = new GardenTile(i*this.width + j, this.squares[i][j]);
        res.push(tile);
      }
    }
    return res;
  }

  toString() : string {
    var res = "\n";
    for(var i=0; i < this.height; i++){
      res += this.squares[i] + "\n";
    }
    return res;
  }

}
