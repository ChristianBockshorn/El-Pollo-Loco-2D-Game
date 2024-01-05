class StatusBarCoins extends DrawableObject {
    /**
     * Array of image paths for different coin states.
     * @type {string[]}
     */
    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];

    /**
     * The number of coins collected.
     * @type {number}
     */
    coinsCollect = 0;

    /**
     * Creates a new StatusBarCoins instance.
     * @constructor
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = 10;
        this.y = 40;
        this.width = 170;
        this.height = 50;
        this.setCoins(0);
    }

    /**
     * Sets the number of coins collected and updates the displayed image.
     * @param {number} coinsCollect - The number of coins collected (0 to 100).
     */
    setCoins(coinsCollect) {
        this.coinsCollect = coinsCollect;
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image based on the number of coins collected.
     * @returns {number} - The index of the image in the IMAGES_COIN array.
     * */
    resolveImageIndex() {
        if (this.coinsCollect >= 100) {
            return 5;
        } else if (this.coinsCollect > 80) {
            return 4;
        } else if (this.coinsCollect > 60) {
            return 3;
        } else if (this.coinsCollect > 40) {
            return 2;
        } else if (this.coinsCollect > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
