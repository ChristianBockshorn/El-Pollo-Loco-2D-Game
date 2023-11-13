class DrawableObject {
    //position
    x = 120;
    y = 250;
    img;
    //Maße-Bilder
    height = 200;
    width = 100;
    imageCache = [];
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    /**
         * @param {Array} arr-['img/image1.png','img/image2.png', ...]
         *  */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}