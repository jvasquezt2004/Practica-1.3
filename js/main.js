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

const size = new Size(1080, 764);
console.log(size.width);
console.log(size.height);

size.resize(1920, 1080);

console.log(size.width);
console.log(size.height);