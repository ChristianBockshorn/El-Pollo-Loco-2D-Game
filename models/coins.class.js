class Coins extends MovableObject {
    y = 350;
    height = 100;
    width = 100;

    offset = {
        top: 40,
        left: 40,
        right: 40,
        bottom: 40
    };


    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 200 + Math.random() * 500;
        
        this.loadImages(this.IMAGES_COINS);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 250);
    }
}