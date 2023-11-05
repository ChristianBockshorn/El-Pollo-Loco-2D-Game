class Background extends MovableObject {
    


    constructor() {
        super().loadImage('img/5_background/layers/1_first_layer/1.png');
        this.y = 90;
        this.x=0;
        this.height = 400;
        this.width = 720;
        // this.x = -300+ Math.random() * 500;
    }
}