/**
 * @class
 * @classdesc This class represents a coin object that can move.
 * @extends MovableObject
 */
class Coins extends MovableObject {
    /**
     * The y-coordinate of the coin.
     * @type {number}
     */
    y = 350;
        
    /**
     * The height of the coin.
     * @type {number}
     */
    height = 100;

    /**
     * The width of the coin.
     * @type {number}
     */
    width = 100;
        
    /**
     * The x-coordinate of the coin's position.
     * @type {number}
     */
    posX = 50;
        
    /**
     * The y-coordinate of the coin's position.
     * @type {number}
     */
    posY = 50;

    
    /**
     * The offset of the coin from the top, left, right, and bottom.
     * @type {Object}
     */
    offset = {
        top: 0,
        left: 40,
        right: 0,
        bottom: 10
    };

    /**
     * The images of the coin.
     * @type {Array<string>}
     */
    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    /**
     * @constructor
     * Constructs a new coin object.
     */
    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 180 + Math.random() * 1800;
        this.y = 220 + Math.random() * 100;
        this.loadImages(this.IMAGES_COINS);
        this.animate();
    }

    
    /**
     * Animates the coin.
     */
    animate() {
        this.coinAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 250);
    }
}