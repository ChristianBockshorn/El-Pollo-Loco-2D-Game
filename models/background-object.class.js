/**
 * @class
 * @extends {MovableObject}
 * @property {number} width - The width of the background object.
 * @property {number} height - The height of the background object.
 */
class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    /**
    * @constructor
    * @param {string} imagePath - The path to the image for the background object.
    * @param {number} x - The x-coordinate of the background object.
    */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }
}