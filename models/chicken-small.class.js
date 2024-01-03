class ChickenSmall extends MovableObject {
    y = 385;
    
    height = 60;
    width = 50;
    offset = {
        right: 0,
        left: 30,
        top: 0,
        bottom: 0,
    };
    energy = 1;
    chickenAnimation;


    Images_Walking = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    Images_Dead = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 200 + Math.random() * 2100;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Dead);
        this.animate();
    }


    animate() {
        this.chickenAnimation = setInterval(() => {
            this.chickenAnimate();
        }, 250);
    }


    chickenAnimate() {
        if (!this.isDead()) {
            this.playWalkingAnimation();
        } else {
            this.playAnimation(this.Images_Dead);
        }
    }


    moving() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);//60FPS
    }


    playWalkingAnimation() {
        this.playAnimation(this.Images_Walking);
    }
}