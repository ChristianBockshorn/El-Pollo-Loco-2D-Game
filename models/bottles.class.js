/**
 * @class
 * @classdesc This class represents a bottle object that can move.
 * @extends MovableObject
 */
class Bottles extends MovableObject {
    /**
    * The y-coordinate of the bottle.
    * @type {number}
    */
    y = 350;

    /**
     * The height of the bottle.
     * @type {number}
     */
    height = 100;

    /**
     * The width of the bottle.
     * @type {number}
     */
    width = 100;

    /**
     * The offset of the bottle from the top, left, right, and bottom.
     * @type {Object}
     */
    offset = {
        top: 0,
        left: 60,
        right: 0,
        bottom: 0
    };

    /**
     * The images of the bottle.
     * @type {Array<string>}
     */
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];


    /**
     * @constructor
     * Constructs a new bottle object.
     */
    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 180 + Math.random() * 1800;

        this.loadImages(this.IMAGES_BOTTLE);
        this.animate();
    }

    /**
     * Animates the bottle.
     */
    animate() {
        this.bottlesAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 1000);
    }

}