class Chicken extends MovableObject {
    y = 350;
    height = 100;
    width = 80;
    Images_Walking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Images_Walking);
        this.animate();
    }

    animate() {
        this.moveLeft();
        
        setInterval(() => {
            this.playAnimation(this.Images_Walking);
        }, 250);
    }
}