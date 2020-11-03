class Circle{
    constructor(radius) {
        this.radius = radius;
    }    
    getDiameter() {
        const diameter = 2 * this.radius;
        return diameter;
    }
    getCircumference() {
        const circumference = 2 * this.radius*(Math.PI);
        return circumference;
    }
    getArea() {
        const area = (this.radius) * (this.radius) * Math.PI;
        return area;
    }
}

const circle = new Circle(10);
console.log(`Diameter is:${circle.getDiameter()}`);
console.log(`Area of the circle is ${circle.getArea()}`);
console.log(`circumference of the circle is ${circle.getCircumference()}`);

const circleNr2 = new Circle(20);
console.log(`Diameter is:${circleNr2.getDiameter()}`);
console.log(`Area of the circle is ${circleNr2.getArea()}`);
console.log(`circumference of the circle is ${circleNr2.getCircumference()}`);


const circleNr3 = new Circle(5);
console.log(`Diameter is:${circleNr3.getDiameter()}`);
console.log(`Area of the circle is ${circleNr3.getArea()}`);
console.log(`circumference of the circle is ${circleNr3.getCircumference()}`);


