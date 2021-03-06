/*jshint esversion: 6 */

var Polygon = require('./../src/polygon');
var Vector = require('./../src/vector');

describe('Polygon', function(){
    it('is a polygon with points to specify its shape and position', function(){
        var poly1 = new Polygon([
            new Vector(10, 12),
            new Vector(22, 23),
            new Vector(32, 23),
            new Vector(42, 73),
            new Vector(52, 63),
            new Vector(62, 43)
            ]),
            poly2 = new Polygon();
        for (let i = 0; i < poly1.points.length; i++) {
            expect(poly1.points[i]).toEqual(jasmine.any(Vector));
        }
        expect(poly2.points.length).toEqual(0);
        expect(poly1.points[0].x).toEqual(10);
        expect(poly1.points[0].y).toEqual(12);
        expect(poly1.points[1].x).toEqual(22);
        expect(poly1.points[1].y).toEqual(23);
        expect(poly1.points[2].x).toEqual(32);
        expect(poly1.points[2].y).toEqual(23);
        expect(poly1.points[3].x).toEqual(42);
        expect(poly1.points[3].y).toEqual(73);
        expect(poly1.points[4].x).toEqual(52);
        expect(poly1.points[4].y).toEqual(63);
        expect(poly1.points[5].x).toEqual(62);
        expect(poly1.points[5].y).toEqual(43);
    });
});

describe('Polygon.equal', function(){
    it('is a function to compare to polygons', function(){
        var poly1 = new Polygon([
                new Vector(10, 12),
                new Vector(22, 23),
                new Vector(32, 23),
                new Vector(42, 73),
                new Vector(52, 63),
                new Vector(62, 43)]),
            poly2 = new Polygon([
                new Vector(10, 12),
                new Vector(22, 23),
                new Vector(32, 23),
                new Vector(42, 73),
                new Vector(52, 63),
                new Vector(62, 43)]),
            poly3 = new Polygon(poly1.points);
            poly3.points.reverse();
        expect(poly1.equal(poly2)).toBe(true);
        expect(poly1.equal(poly3)).toBe(true);
        expect(poly2.equal(poly3)).toBe(true);
    });
});

describe('Polygon.translate', function(){
    it('is a function to translate the polygon BY certain dx and dx', function(){
        var poly = new Polygon([
                new Vector(0, 0),
                new Vector(10, 0),
                new Vector(10, 10),
                new Vector(0, 10)]).translate(10, 10);
        expect(poly.points[0].x).toEqual(10);
        expect(poly.points[0].y).toEqual(10);
        expect(poly.points[1].x).toEqual(20);
        expect(poly.points[1].y).toEqual(10);
        expect(poly.points[2].x).toEqual(20);
        expect(poly.points[2].y).toEqual(20);
        expect(poly.points[3].x).toEqual(10);
        expect(poly.points[3].y).toEqual(20);
    });
});

describe('Polygon.rotate', function(){
    it('is a function to rotate the polygon around an origin', function(){
        var poly = new Polygon([
                new Vector(0, 0),
                new Vector(10, 0),
                new Vector(10, 10),
                new Vector(0, 10)]).rotate(180, new Vector(5, 5));
        expect(poly.points[0].x).toBeCloseTo(10);
        expect(poly.points[0].y).toBeCloseTo(10);
        expect(poly.points[1].x).toBeCloseTo(0);
        expect(poly.points[1].y).toBeCloseTo(10);
        expect(poly.points[2].x).toBeCloseTo(0);
        expect(poly.points[2].y).toBeCloseTo(0);
        expect(poly.points[3].x).toBeCloseTo(10);
        expect(poly.points[3].y).toBeCloseTo(0);
    });
});

describe('Polygon.clone', function(){
    it('is a function to clone the polygon', function(){
        var poly = new Polygon([
                new Vector(0, 0),
                new Vector(10, 0),
                new Vector(10, 10),
                new Vector(0, 10)]);
        var cloned = poly.clone();
        cloned.points[0].x = 100;
        expect(poly.points[0].x).toEqual(0);
        expect(cloned.points[0].x).toEqual(100);
    });
});
