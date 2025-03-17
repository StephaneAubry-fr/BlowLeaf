package com.fixvid.blowleaf.entity;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

public class GardenTest extends TestCase {

    public GardenTest( String testName )
    {
        super( testName );
    }

    public static Test suite()
    {
        return new TestSuite( GardenTest.class );
    }

    public void testGarden_1x2() {
        Garden garden = new Garden(2, 1);

        garden.setSquare(0,0, 2);
        garden.setSquare(0,1, 7);

        System.out.println(garden);

        assertEquals(Integer.valueOf(9), garden.getSum());
    }

    public void testGarden_2x3() {
        Integer[][] squares = {
                {1,2,3},
                {4,5,6}
        };

        Garden garden = new Garden( 3,2);
        garden.setSquares(squares);

        System.out.println(garden);

        assertEquals( Integer.valueOf(6), squares[1][2]  );
        assertEquals( Integer.valueOf(6), garden.getSquare(1,2));
        assertEquals(Integer.valueOf(21), garden.getSum());
    }

    public void testBlowRight() {
        Integer[][] init = {
                {1,2,3},
                {4,5,6}
        };
        Garden garden = new Garden(3,2);
        garden.setSquares(init);

        //System.out.println(garden);
        garden.blowRight();
        //System.out.println(garden);

        Integer[][] ref = {
                {0,1,2},
                {0,4,5}
        };
        Garden expected = new Garden(3,2);
        expected.setSquares(ref);

        assertEquals(expected, garden);
    }

    public void testBlowLeft() {
        Integer[][] init = {
                {1,2,3},
                {4,5,6}
        };
        Garden garden = new Garden(3,2);
        garden.setSquares(init);

        //System.out.println(garden);
        garden.blowLeft();
        //System.out.println(garden);

        Integer[][] ref = {
                {2,3,0},
                {5,6,0}
        };
        Garden expected = new Garden(3,2);
        expected.setSquares(ref);

        assertEquals(expected, garden);
    }

    public void testBlowUp() {
        Integer[][] init = {
                {1,2,3},
                {4,5,6}
        };
        Garden garden = new Garden(3,2);
        garden.setSquares(init);

        //System.out.println(garden);
        garden.blowUp();
        //System.out.println(garden);

        Integer[][] ref = {
                {4,5,6},
                {0,0,0}
        };
        Garden expected = new Garden(3,2);
        expected.setSquares(ref);

        assertEquals(expected, garden);
    }

    public void testBlowDown() {
        Integer[][] init = {
                {1,2,3},
                {4,5,6}
        };
        Garden garden = new Garden(3,2);
        garden.setSquares(init);

        //System.out.println(garden);
        garden.blowDown();
        //System.out.println(garden);

        Integer[][] ref = {
                {0,0,0},
                {1,2,3}
        };
        Garden expected = new Garden(3,2);
        expected.setSquares(ref);

        assertEquals(expected, garden);
    }
}
