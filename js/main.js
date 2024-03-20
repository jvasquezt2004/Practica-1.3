class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}

class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x  = newX;
        this.y = newY;
    }
}

const size = new Size(1080, 764);
console.log(size.width);
console.log(size.height);

size.resize(1920, 1080);

console.log(size.width);
console.log(size.height);

const point = new Position();
console.log(point.x);
console.log(point.y);

point.move(100, 200);

console.log(point.x);
console.log(point.y);