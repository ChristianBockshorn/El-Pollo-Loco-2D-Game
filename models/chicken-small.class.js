class ChickenSmall extends MovableObject {
    /**
     * Y-coordinate of the chicken.
     * @type {number}
     */
    y = 385;

    /**
     * Height of the chicken.
     * @type {number}
     */
    height = 60;

    /**
     * Width of the chicken.
     * @type {number}
     */
    width = 50;

    /**
     * Energy level of the chicken.
     * @type {number}
     */
    energy = 1;

    /**
     * Offset values for collision detection.
     * @type {Object}
     * @property {number} top - Top offset.
     * @property {number} bottom - Bottom offset.
     * @property {number} left - Left offset.
     * @property {number} right - Right offset.
     */
    offset = {
        top: 0,
        bottom: 0,
        left: 10,
        right: 10
    };

    /**
     * Array of image paths for walking animation.
     * @type {string[]}
     */
    Images_Walking = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    /**
     * Array of image paths for dead animation.
     * @type {string[]}
     */
    Images_Dead = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    /**
     * Constructs a new ChickenSmall object.
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 200 + Math.random() * 2100;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Dead);
        this.animate();
    }

    /**
     * Initiates the chicken animation.
     */
    animate() {
        this.chickenAnimation = setInterval(() => {
            this.chickenAnimate();
        }, 250);
    }

    /**
     * Performs the chicken animation based on its state.
     */
    chickenAnimate() {
        if (!this.isDead()) {
            this.playWalkingAnimation();
        } else {
            this.playAnimation(this.Images_Dead);
        }
    }

    /**
     * Initiates the chicken movement animation.
     */
    moving() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // 60FPS
    }

    /**
     * Plays the walking animation.
     */
    playWalkingAnimation() {
        this.playAnimation(this.Images_Walking);
    }
}
