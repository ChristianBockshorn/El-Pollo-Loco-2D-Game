class MovableObject {
    //position
    x=120;
    y=250;
    img;
    //Maße-Bild
    height= 200;
    width=100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}