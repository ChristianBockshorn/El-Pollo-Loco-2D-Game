class StatusBar extends DrawableObject {
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    percentage = 100;

    constructor() {
        super(); //Um die Methoden vom übergeordneten Objekt auch noch zu initialisieren
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 30;
        this.y = 0;
        this.width = 160;
        this.height = 50;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; //=> 0...5
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }

    }
}