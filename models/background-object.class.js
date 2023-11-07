class BackgroundObject extends MovableObject {

    //img/5_background/layers/1_first_layer/1.png
    width = 720;
    height = 480;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }
}