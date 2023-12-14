class Bottles extends MovableObject {
    y = 350;
    height = 100;
    width = 100;

    offset = {
        top: 40,
        left: 40,
        right: 40,
        bottom: 40
    };


    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 180 + Math.random() * 1800;

        this.loadImages(this.IMAGES_BOTTLE);
        this.animate();
    }

    animate() {
        this.bottlesAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 1000);
    }
    
}