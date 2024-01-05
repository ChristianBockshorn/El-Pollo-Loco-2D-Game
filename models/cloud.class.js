/**
 * @class
 * @classdesc This class represents a cloud object that can move.
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    /**
     *  The y-coordinate of the cloud.
     * @type {number}
     */
    y = 20;

    /**
     * The height of the cloud.
     * @type {number}
     */
    height = 300;

    /**
     * The width of the cloud.
     * @type {number}
     */
    width = 700;

    /**
     * @constructor
     * @description Constructs a new cloud object.
     * @param {Object} cloud2 - The second cloud object.
     */
    constructor(cloud2) {
        super().loadImage('img/5_background/layers/4_clouds/full.png');
        this.x = 0 + Math.random() * 500;
        this.clou = cloud2;
        this.animate();
    }

    
    /**
     * Animates the cloud.
     */
    animate() {
        this.moveLeft();
    }
}