//Paint a circle to a canvas element

let ctx = document.getElementById("myCanvas").getContext("2d");
ctx.beginPath();
ctx.arc(120, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();


//Class creation time!

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillingColor) {
        this.x = x,
            this.y = y,
            this.r = r,
            this.startAngle = startAngle,
            this.endAngle = endAngle,
            this.fillingColor = fillingColor
    }

    draw() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.stroke();
        ctx.fillStyle = this.fillingColor;
        ctx.fill();
    }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
const c2 = new Circle(350, 250, 40, 0, 2 * Math.PI, 'blue');
const c3 = new Circle(600, 90, 60, 0, 2 * Math.PI, 'green');

c1.draw();
c2.draw();
c3.draw();

/////////////////////////////////////////////////////Now lets make art!

setInterval((() => {
    let x = Math.floor(Math.random() * 1270)
    let y = Math.floor(Math.random() * 620)
    let r = Math.floor(Math.random() * 100)
    let fillingColor = '#' + (Math.random().toString(16) + "000000").substring(2, 8)
    let c = new Circle(x, y, r, 0, 2 * Math.PI, fillingColor);
    c.draw()
}), 100)

