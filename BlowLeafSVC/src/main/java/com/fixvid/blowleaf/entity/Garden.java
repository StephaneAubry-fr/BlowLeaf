package com.fixvid.blowleaf.entity;

import java.util.Arrays;
import java.util.Objects;

public class Garden {

    private Integer width, height;
    private Integer[][] squares;

    protected Garden() {

    }

    public Garden(Integer width, Integer height) {
        this.width = width;
        this.height = height;
        squares = new Integer[this.height][this.width];
    }

    protected void setSquare(Integer row, Integer col, Integer value) {
        this.squares[row][col] = value;
    }

    public Integer getSquare(Integer row, Integer col) {
        return this.squares[row][col];
    }

    protected Integer getSum() {
        int res = 0;

        for(int i=0; i< this.height; i++) {
            for(int j=0; j< this.width; j++) {
                res += this.squares[i][j];
            }
        }
        return res;
    }

    public Integer[][] getSquares() {
        return squares;
    }

    public void setSquares(Integer[][] squares) {
        this.squares = squares;
    }

    public Integer getWidth() {
        return width;
    }

    protected void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    protected void setHeight(Integer height) {
        this.height = height;
    }
    /////////////////

    public void blowRight(){
        for(int row = 0; row < this.height; row++){
            for(int col = this.width-1; col>0; col--){
                int value =  this.getSquare(row, col-1);
                this.setSquare(row, col, value);
            }
            this.setSquare(row, 0, 0);
        }
    }

    public void blowLeft(){
        for(int row = 0; row < this.height; row++){
            for(int col = 0; col < this.width-1; col++){
                int value =  this.getSquare(row, col+1);
                this.setSquare(row, col, value);
            }
            this.setSquare(row, this.width-1, 0);
        }
    }

    public void blowUp(){
        for(int col = 0; col < this.width; col++){
            for(int row = 0; row < this.height-1; row++){
                int value =  this.getSquare(row+1, col);
                this.setSquare(row, col, value);
            }
            this.setSquare(this.height-1, col, 0);
        }
    }
    public void blowDown(){
        for(int col = 0; col < this.width; col++){
            for(int row = this.height-1; row > 0; row--){
                int value =  this.getSquare(row-1, col);
                this.setSquare(row, col, value);
            }
            this.setSquare(0, col, 0);
        }
    }



    /////////////////
    @Override
    public String toString() {
        String res = "Garden{" + System.lineSeparator();
        for(Integer[] row : squares ) {
            res += Arrays.toString(row) + System.lineSeparator() ;
        }
        res +='}';

        return res;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Garden garden = (Garden) o;
        return Objects.equals(width, garden.width) && Objects.equals(height, garden.height) && Objects.deepEquals(squares, garden.squares);
    }

    @Override
    public int hashCode() {
        return Objects.hash(width, height, Arrays.deepHashCode(squares));
    }
}
