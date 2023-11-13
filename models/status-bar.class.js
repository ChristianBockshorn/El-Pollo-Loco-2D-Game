class StatusBar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/1.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/2.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/3.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/4.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/5.png',

    ];

    percentage = 100;

    constructor() {
        this.loadImages(this.IMAGES);
    }

    setPercentage() {

    }
}