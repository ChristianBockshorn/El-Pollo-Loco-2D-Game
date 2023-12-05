class Chicken extends MovableObject {

    y = 350;
    height = 100;
    width = 80;
    offset = {
        right: 5,
        left: 5,
        top: 10,
        bottom: 10,
    };

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


    animate() {
        setInterval(() => {
            if (!this.isDead())
                this.playAnimation(this.Images_Dead);
        }, 150);


        setInterval(() => {
            this.playAnimation(this.Images_Walking);
        }, 250);


    }


    moving() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);//60FPS
    }


}