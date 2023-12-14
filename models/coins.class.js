class Coins extends MovableObject {
    y = 350;
    height = 100;
    width = 100;

    posX = 50;
    posY = 50;

    // offset = {
    //     top: 40,
    //     left: 40,
    //     right: 40,
    //     bottom: 40
    // };


    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 180 + Math.random() * 1800;
        this.y = 220 + Math.random() * 100;

        this.loadImages(this.IMAGES_COINS);
        this.animate();
    }

    animate() {
        this.coinAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 250);
    }
}