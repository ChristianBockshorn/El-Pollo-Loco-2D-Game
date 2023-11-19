class StatusBarCoins extends DrawableObject {
    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];

    coinsCollect = 0;

    constructor() {
        super(); //Um die Methoden vom übergeordneten Objekt auch noch zu initialisieren
        this.loadImages(this.IMAGES_COIN);
        this.x = 10;
        this.y = 40;
        this.width = 170;
        this.height = 50;
        this.setCoins(0);
    }

    setCoins(coinsCollect) {
        this.coinsCollect = coinsCollect; //=> 0...5
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

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

    // collectCoin() {
    //     this.setCoins += 10; 
    //     if (this.setCoins > 100) {
    //         this.setCoins = 100;
    //     }
    //     this.setPercentageCoins();
    // }
}