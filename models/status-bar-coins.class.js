class StatusBarCoins extends DrawableObject {
    coinsCollected = 0;
    
    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
    ];

    

    constructor() {
        super(); //Um die Methoden vom übergeordneten Objekt auch noch zu initialisieren
        this.loadImages(this.IMAGES_COIN);
        this.x = 10;
        this.y = 40;
        this.width = 170;
        this.height = 50;
        this.setCoins();
    }

    setCoins(coinsCollected) {
        this.coinsCollected = coinsCollected; //=> 0...5
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coinsCollected >= 5) {
            return 5;
        } else if (this.coinsCollected > 4) {
            return 4;
        } else if (this.coinsCollected > 3) {
            return 3;
        } else if (this.coinsCollected > 2) {
            return 2;
        } else if (this.coinsCollected > 1) {
            return 1;
        } else {
            return 0;
        }

    }
}