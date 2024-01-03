class StatusBarEndboss extends DrawableObject {
    IMAGES_ENDBOSS_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png', // Bild Nr 0
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',// Bild Nr 1
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',// Bild Nr 2
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png', // Bild Nr 3
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',// Bild Nr 4
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png', // Bild Nr 5
    ];
    percentage = 100;


    constructor() {
        super(); //Um die Methoden vom übergeordneten Objekt auch noch zu initialisieren
        this.loadImages(this.IMAGES_ENDBOSS_HEALTH);
        this.x = 500;
        this.y = 0;
        this.width = 170;
        this.height = 50;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage; //=> 0...5
        let path = this.IMAGES_ENDBOSS_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;// Bild Nr 5
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}