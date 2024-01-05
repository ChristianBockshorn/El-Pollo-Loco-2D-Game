    /**
     * @class DrawableObject
     * @property {number} x - The x position
     * @property {number} y - The y position
     * @property {Image} img - The image
     * @property {number} height - The height of the image
     * @property {number} width - The width of the image
     * @property {Array} imageCache - The cache for images
     * @property {number} currentImage - The index of the current image
     * @property {Object} offset - The offset values
     * @property {number} offset.top - The top offset
     * @property {number} offset.left - The left offset
     * @property {number} offset.right - The right offset
     * @property {number} offset.bottom - The bottom offset
     */
class DrawableObject {
    x = 120;
    y = 250;
    img;
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

    
    /**
     * Load an image
     * @param {string} path - The path of the image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draw the image
     * @param {CanvasRenderingContext2D} ctx - The canvas context
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    /**
     * Draw a frame
     * @param {CanvasRenderingContext2D} ctx - The canvas context
     */
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
     * Load multiple images
     * @param {Array} arr - Array of image paths ['img/image1.png','img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}