class StatusBarHealth extends DrawableObject {
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png', // Bild Nr 0
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',// Bild Nr 1
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',// Bild Nr 2
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png', // Bild Nr 3
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',// Bild Nr 4
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png', // Bild Nr 5
    ];
    percentage = 100;


    constructor() {
        super(); //Um die Methoden vom übergeordneten Objekt auch noch zu initialisieren
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 10;
        this.y = 0;
        this.width = 170;
        this.height = 50;
        this.setPercentage(100);
        this.checkCharacterEnergy();
    }


    setPercentage(percentage) {
        this.percentage = percentage; //=> 0...5
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;// Bild Nr 5
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


    collectCoin() {
        this.percentage += 10;
        if (this.percentage > 100) {
            this.percentage = 100;
        }
        this.setPercentage();
    }


    checkCharacterEnergy() {
        this.percentage == 0;
        console.log('energy = 0', this.percentage)
    }
}