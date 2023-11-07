class MovableObject {
    //position
    x = 120;
    y = 250;
    img;
    //Maße-Bilder
    height = 200;
    width = 100;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * @param {Array} arr-['img/image1.png','img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)//60FPS
    }
}