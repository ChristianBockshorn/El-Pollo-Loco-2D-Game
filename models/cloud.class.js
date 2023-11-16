class Cloud extends MovableObject {
    y = 20;
    height = 300;
    width = 700;


    constructor(cloud2) {
        super().loadImage('img/5_background/layers/4_clouds/full.png');
        this.x = 0 + Math.random() * 500;
        this.clou = cloud2;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }


}