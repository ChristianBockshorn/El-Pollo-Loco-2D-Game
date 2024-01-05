class ThrowableObject extends MovableObject {
    /**
     * Array of image paths for the rotation of the bottle.
     * @type {string[]}
     */
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    /**
     * Array of image paths for the bottle splash animation.
     * @type {string[]}
     */
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    world;
    splashOnTheGround = false;
    isSplashed = false;

    /**
     * Creates a new ThrowableObject instance.
     * @constructor
     * @param {number} x - The X-coordinate of the throwable object.
     * @param {number} y - The Y-coordinate of the throwable object.
     * 
     */
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.animate();
    }

    /**
     * Animates the throwable object and performs the corresponding actions.
     */
    animate() {
        setInterval(() => {
            if (this.throwbottle()) {
                this.bottleSplashAnimation();
            } else {
                this.playAnimation(this.IMAGES_BOTTLE);
            }
        }, 100);
    }

    /**
     * Checks if the bottle has been thrown.
     * @returns {boolean} - True if the bottle has been thrown, otherwise False.
     */
    throwbottle() {
        return this.y >= 300;
    }

    /**
     * Performs the throw of the bottle.
     */
    throw() {
        this.speedY = 30; // Speed downwards
        this.applyGravity();
        setInterval(() => {
            this.x += 7;
        }, 25);
    }

    /**
     * Animates the bottle splash animation and changes the Y-speed.
     */
    bottleSplashAnimation() {
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        this.speedY = -25;
    }

    /**
     * Checks if the bottle is on the ground.
     * @returns {boolean} - True if the bottle is on the ground, otherwise False.
     */
    bottleIsOnTheGround() {
        return this.posY >= 80;
    }
}