class StatusBarHealth extends DrawableObject {
    /**
     * Array of image paths for different health states.
     * @type {string[]}
     */
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    /**
     * The percentage value of health.
     * @type {number}
     */
    percentage = 100;

    /**
     * Creates a new HealthStatusBar instance.
     * @constructor
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 10;
        this.y = 0;
        this.width = 170;
        this.height = 50;
        this.setPercentage(100);
        this.checkCharacterEnergy();
    }

    /**
     * Sets the percentage value of health and updates the displayed image.
     * @param {number} percentage - The percentage value of health (0 to 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image based on the percentage value of health.
     * @returns {number} - The index of the image in the IMAGES_HEALTH array.
     */
    resolveImageIndex() {
        if (this.percentage === 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Increases health by 10 percentage points and updates the display.
     */
    collectCoin() {
        this.percentage += 10;
        if (this.percentage > 100) {
            this.percentage = 100;
        }
        this.setPercentage();
    }

    /**
     * Checks the character's energy and outputs a message when the energy is 0.
     */
    checkCharacterEnergy() {
        this.percentage = 0;
    }
}
