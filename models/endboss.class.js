class Endboss extends MovableObject {
    y = 80;
    height = 400;
    width = 230;
    Images_Walking = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    constructor() {
        super().loadImage(this.Images_Walking[0]);
        this.loadImages(this.Images_Walking);
        this.x = 2000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.Images_Walking);
        }, 250);
    }
}