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
    offset = {
        top: 20,
        left: 20,
        right: 0,
        bottom: 0
    };

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    drawFrame(ctx) {
        // if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '5';
        //     ctx.strokeStyle = 'blue';
        //     ctx.rect(this.x, this.y, this.width, this.height);
        //     ctx.stroke();
        // }

        // if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '3';
        //     ctx.strokeStyle = 'red';
        //     ctx.rect(this.x-this.offset.right, this.offset.top, this.offset.left, this.offset.bottom);
        //     ctx.stroke();
        // }
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