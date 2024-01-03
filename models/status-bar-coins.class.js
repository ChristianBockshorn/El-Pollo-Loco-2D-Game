class StatusBarCoins extends DrawableObject {
    /**
     * Array von Bildpfaden für verschiedene Münzzustände.
     * @type {string[]}
     */
    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];

    /**
     * Die Anzahl der gesammelten Münzen.
     * @type {number}
     */
    coinsCollect = 0;

    /**
     * Erstellt eine neue StatusBarCoins-Instanz.
     * @constructor
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = 10;
        this.y = 40;
        this.width = 170;
        this.height = 50;
        this.setCoins(0);
    }

    /**
     * Setzt die Anzahl der gesammelten Münzen und aktualisiert das angezeigte Bild.
     * @param {number} coinsCollect - Die Anzahl der gesammelten Münzen (0 bis 100).
     */
    setCoins(coinsCollect) {
        this.coinsCollect = coinsCollect;
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Ermittelt den Index des Bildes basierend auf der Anzahl der gesammelten Münzen.
     * @returns {number} - Der Index des Bildes im IMAGES_COIN-Array.
     * */
    resolveImageIndex() {
        if (this.coinsCollect >= 100) {
            return 5;
        } else if (this.coinsCollect > 80) {
            return 4;
        } else if (this.coinsCollect > 60) {
            return 3;
        } else if (this.coinsCollect > 40) {
            return 2;
        } else if (this.coinsCollect > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
