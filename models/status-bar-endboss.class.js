class StatusBarEndboss extends DrawableObject {
    /**
     * Array von Bildpfaden für verschiedene Gesundheitszustände des Endbosses.
     * @type {string[]}
     */
    IMAGES_ENDBOSS_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];

    /**
     * Der prozentuale Wert der Gesundheit des Endbosses.
     * @type {number}
     */
    percentage = 100;

    /**
     * Erstellt eine neue StatusBarEndboss-Instanz.
     * @constructor
     */
    constructor() {
        super(); // Initialisiert Methoden von der Elternklasse.
        this.loadImages(this.IMAGES_ENDBOSS_HEALTH);
        this.x = 500;
        this.y = 0;
        this.width = 170;
        this.height = 50;
        this.setPercentage(100);
    }

    /**
     * Setzt den prozentualen Wert der Gesundheit und aktualisiert das angezeigte Bild.
     * @param {number} percentage - Der prozentuale Wert der Gesundheit (0 bis 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_ENDBOSS_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Ermittelt den Index des Bildes basierend auf dem prozentualen Wert der Gesundheit.
     * @returns {number} - Der Index des Bildes im IMAGES_ENDBOSS_HEALTH-Array.
     */
    resolveImageIndex() {
        if (this.percentage === 100) {
            return 5;
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