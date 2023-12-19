class Bottles extends MovableObject {
    y = 350;//Höhe der einzusammelnden Flaschen auf dem Boden

    //Größe der Flaschen
    height = 100;
    width = 100;
    //---------
    
    offset = {
        top: 0,
        left: 60,
        right: 0,
        bottom: 0
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