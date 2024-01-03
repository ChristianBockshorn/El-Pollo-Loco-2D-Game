class StatusBarHealth extends DrawableObject {
    /**
     * Array von Bildpfaden für verschiedene Gesundheitszustände.
     * @type {string[]}
     */
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    /**
     * Der prozentuale Wert der Gesundheit.
     * @type {number}
     */
    percentage = 100;

    /**
     * Erstellt eine neue HealthStatusBar-Instanz.
     * @constructor
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 10;
        this.y = 0;
        this.width = 170;
        this.height = 50;
        this.setPercentage(100);
        this.checkCharacterEnergy();
    }

    /**
     * Setzt den prozentualen Wert der Gesundheit und aktualisiert das angezeigte Bild.
     * @param {number} percentage - Der prozentuale Wert der Gesundheit (0 bis 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Ermittelt den Index des Bildes basierend auf dem prozentualen Wert der Gesundheit.
     * @returns {number} - Der Index des Bildes im IMAGES_HEALTH-Array.
     */
    resolveImageIndex() {
        if (this.percentage === 100) {
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

    /**
     * Erhöht die Gesundheit um 10 Prozentpunkte und aktualisiert die Anzeige.
     */
    collectCoin() {
        this.percentage += 10;
        if (this.percentage > 100) {
            this.percentage = 100;
        }
        this.setPercentage();
    }

    /**
     * Überprüft die Energie des Charakters und gibt eine Meldung aus, wenn die Energie 0 ist.
     */
    checkCharacterEnergy() {
        this.percentage = 0;
        console.log('Energie = 0', this.percentage);
    }
}