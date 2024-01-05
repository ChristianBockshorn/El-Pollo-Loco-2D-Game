/**
 * @class
 * @classdesc This class represents a status bar for bottles in the game.
 * @extends DrawableObject
 */
class StatusBarBottle extends DrawableObject {
    /**
     * @property {string[]} IMAGES_BOTTLE - Array of image paths for different bottle states.
     * @property {number} collected - The number of bottles collected.
     */
    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];
    collected = 0;

    /**
     * Creates a new StatusBarBottle instance.
     * @constructor
     */
    constructor() {
        super(); 
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 10;
        this.y = 80;
        this.width = 170;
        this.height = 50;
        this.setCollected(0);
    }

    /**
     * Sets the number of bottles collected and updates the displayed image.
     * @param {number} collected - The number of bottles collected.
     */
    setCollected(collected) {
        this.collected = collected;
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image based on the number of bottles collected.
     * @returns {number} - The index of the image in the IMAGES_BOTTLE array.
     */
    resolveImageIndex() {
        if (this.collected >= 10) {
            return 5;
        } else if (this.collected > 8) {
            return 4;
        } else if (this.collected > 6) {
            return 3;
        } else if (this.collected > 4) {
            return 2;
        } else if (this.collected > 2) {
            return 1;
        } else {
            return 0;
        }
    }
}
