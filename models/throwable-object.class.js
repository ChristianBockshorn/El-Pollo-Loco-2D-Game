class ThrowableObject extends MovableObject {
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
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


    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        //Größe der bottle
        this.height = 60;
        this.width = 50;
        //-------------
        this.throw();
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.throwbottle()) {
                this.bottleSplashAnimation();
            } else {
                this.playAnimation(this.IMAGES_BOTTLE);
            }
        }, 100);
    }


    throwbottle() {
        return this.y >= 300;
    }


    throw() {
        this.speedY = 30; //Geschwindigkeit nach unten
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }


    bottleSplashAnimation() {
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        this.speedY = -25;
    }


    bottleIsOnTheGround() {
        return this.posY >= 80;
    }
}