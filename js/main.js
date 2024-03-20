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

// const size = new Size(1080, 764);
// console.log(size.width);
// console.log(size.height);

// size.resize(1920, 1080);

// console.log(size.width);
// console.log(size.height);

// const point = new Position();
// console.log(point.x);
// console.log(point.y);

// point.move(100, 200);

// console.log(point.x);
// console.log(point.y);


// Clase ProgramWindow
class ProgramWindow {
    
    // valores por defecto para width y height
    constructor(width = 800, height = 600) {
        this.screenSize = new Size(width, height);
        this.size = new Size();
        this.position = new Position();
    }

    // Método para cambiar el tamaño de la ventana
    resize(newSize) {
        // Si el nuevo tamaño es menor a 1, se establece en 1
        newSize.width = newSize.width < 1 ? 1 : newSize.width;
        newSize.height = newSize.height < 1 ? 1 : newSize.height;

        // Si el nuevo tamaño es mayor al tamaño de la pantalla, se establece el tamaño de la pantalla
        if (this.position.x + newSize.width > this.screenSize.width) {
            newSize.width = this.screenSize.width - this.position.x;
        }
        if (this.position.y + newSize.height > this.screenSize.height) {
            newSize.height = this.screenSize.height - this.position.y;
        }

        // Se establece el nuevo tamaño
        this.size.resize(newSize.width, newSize.height);
    }
}

const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);

const newSize = new Size(600, 400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
console.log(programWindow.size.height);