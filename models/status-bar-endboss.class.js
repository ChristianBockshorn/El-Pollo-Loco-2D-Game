/**
 * @class
 * @classdesc This class represents a status bar for the end boss in the game.
 * @extends DrawableObject
 */
class StatusBarEndboss extends DrawableObject {
    /**
     * @property {string[]} IMAGES_ENDBOSS_HEALTH - Array of image paths for different health states of the end boss.
     * @property {number} percentage - The percentage value of the end boss's health.
     */
    IMAGES_ENDBOSS_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];
    percentage = 100;

    /**
     * Creates a new StatusBarEndboss instance.
     * @constructor
     */
    constructor() {
        super(); // Initializes methods from the parent class.
        this.loadImages(this.IMAGES_ENDBOSS_HEALTH);
        this.x = 500;
        this.y = 0;
        this.width = 170;
        this.height = 50;
        this.setPercentage(100);
    }

    /**
     * Sets the percentage value of health and updates the displayed image.
     * @param {number} percentage - The percentage value of health (0 to 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_ENDBOSS_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image based on the percentage value of health.
     * @returns {number} - The index of the image in the IMAGES_ENDBOSS_HEALTH array.
     */
    resolveImageIndex() {
        if (this.percentage === 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}