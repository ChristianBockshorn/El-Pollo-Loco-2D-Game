/**
 * @class
 * @extends {MovableObject}
 * @property {number} y - The y-coordinate of the endboss.
 * @property {number} height - The height of the endboss.
 * @property {number} width - The width of the endboss.
 * @property {boolean} animationEnded - The state of the animation.
 * @property {string[]} Images_Walking - The array of image paths for the walking animation.
 * @property {string[]} Images_Alert - The array of image paths for the alert animation.
 * @property {string[]} Images_Attack - The array of image paths for the attack animation.
 * @property {string[]} Images_Hurt - The array of image paths for the hurt animation.
 * @property {string[]} Images_Dead - The array of image paths for the dead animation.
 */
class Endboss extends MovableObject {
    character;
    world;
    y = 80;
    height = 400;
    width = 230;
    animationEnded = false;


    Images_Walking = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    Images_Alert = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    Images_Attack = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    Images_Hurt = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    Images_Dead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];


    constructor() {
        super().loadImage(this.Images_Walking[0]);
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Alert);
        this.loadImages(this.Images_Attack);
        this.loadImages(this.Images_Hurt);
        this.loadImages(this.Images_Dead);
        this.x = 2000;
        this.animate();
    }

    /**
     * Starts the endboss animation.
     */
    animate() {
        this.endbossInterval = setInterval(() => {
            this.endbossAnimate();
        }, 200);
    }

    /**
     * Animates the endboss based on its state (dead or alive).
     */
    endbossAnimate() {
        if (this.endbossIsDead() && !this.animationEnded) {
            this.playDeadAnimation();
        } else if (!this.animationEnded) {
            if (this.isHurt()) {
                this.moveLeft();
                this.speed = 20;
                this.playAnimation(this.Images_Hurt);
                this.playAnimation(this.Images_Walking);
            } else if (this.seeCharacterThanAlert()) {
                this.playAnimation(this.Images_Alert);
            } else if (this.seeCharacterAttack()) {
                this.playAnimation(this.Images_Attack);
            }
        }
    }

    /**
     * Plays the dead animation for the endboss.
     */
    playDeadAnimation() {
        this.playAnimation(this.Images_Dead);
        this.animationEnded = true;
        clearInterval(this.endbossInterval);
        this.y = 120;
        this.stopGame();
    }
}