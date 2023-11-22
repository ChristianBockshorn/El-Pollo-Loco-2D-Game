class StatusBarBottle extends DrawableObject {
    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',

    ];

    bottlesCollect = 0;

    constructor() {
        super(); //Um die Methoden vom übergeordneten Objekt auch noch zu initialisieren
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 10;
        this.y = 80;
        this.width = 170;
        this.height = 50;
        this.setBottles(0);
    }

    setBottles(bottlesCollect) {
        this.bottlesCollect = bottlesCollect; //=> 0...5
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.bottlesCollect >= 10) {
            return 5;
        } else if (this.bottlesCollect > 8) {
            return 4;
        } else if (this.bottlesCollect > 6) {
            return 3;
        } else if (this.bottlesCollect > 4) {
            return 2;
        } else if (this.bottlesCollect > 2) {
            return 1;
        } else {
            return 0;
        }

    }
}