/**
 * @class
 * @extends {MovableObject}
 * @property {number} y - The y-coordinate of the chicken.
 * @property {number} height - The height of the chicken.
 * @property {number} width - The width of the chicken.
 * @property {Object} offset - The offset values for the chicken.
 * @property {number} energy - The energy level of the chicken.
 * @property {number} chickenAnimation - The chicken animation interval.
 * @property {string[]} Images_Walking - The array of image paths for the walking animation.
 * @property {string[]} Images_Dead - The array of image paths for the dead animation.
 */
class Chicken extends MovableObject {
    y = 350;
    height = 100;
    width = 80;
    offset = {
        right: 10,
        left: 5,
        top: 5,
        bottom: 10,
    };
    energy = 1;
    chickenAnimation;


    Images_Walking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    Images_Dead = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 2100;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Dead);
        this.animate();
    }


    /**
     * Starts the chicken animation.
     */
    animate() {
        this.chickenAnimation = setInterval(() => {
            this.chickenAnimate();
        }, 250);
    }

    /**
     * Animates the chicken based on its state (dead or alive).
     */
    chickenAnimate() {
        if (!this.isDead()) {
            this.playWalkingAnimation();
        } else {
            this.playAnimation(this.Images_Dead);
        }
    }


    /**
     * Moves the chicken to the left at a rate of 60FPS.
     */
    moving() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

    /**
     * Plays the walking animation for the chicken.
     */
    playWalkingAnimation() {
        this.playAnimation(this.Images_Walking);
    }
}