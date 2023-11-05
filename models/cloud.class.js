class Cloud extends MovableObject {
    
    y = 20;
    height = 300;
    width = 700;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/full.png');

        this.x = -300+ Math.random() * 500;
    }
}