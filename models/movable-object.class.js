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

    playAnimation(images) {
        let i = this.currentImage % this.Images_Walking.length; //let i=7 % 6; => 1,Rest 1
        // i= 0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,.....
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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