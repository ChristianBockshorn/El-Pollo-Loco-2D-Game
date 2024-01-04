class ThrowableObject extends MovableObject {
      /**
     * Array von Bildpfaden für die Rotation der Flasche.
     * @type {string[]}
     */
      IMAGES_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    /**
     * Array von Bildpfaden für die Flaschenspritzanimation.
     * @type {string[]}
     */
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    
    world;
    splashOnTheGround = false;
    isSplashed = false;

    /**
     * Erstellt eine neue ThrowableObject-Instanz.
     * @constructor
     * @param {number} x - Die X-Koordinate des werfbaren Objekts.
     * @param {number} y - Die Y-Koordinate des werfbaren Objekts.
     * 
     */
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.animate();
    }

    /**
     * Animiert das werfbare Objekt und führt die entsprechenden Aktionen aus.
     */
    animate() {
        setInterval(() => {
            if (this.throwbottle()) {
                this.bottleSplashAnimation();
            } else {
                this.playAnimation(this.IMAGES_BOTTLE);
            }
        }, 100);
    }

    /**
     * Überprüft, ob die Flasche geworfen wurde.
     * @returns {boolean} - True, wenn die Flasche geworfen wurde, sonst False.
     */
    throwbottle() {
        return this.y >= 300;
    }

    /**
     * Führt den Wurf der Flasche aus.
     */
    throw() {
        this.speedY = 30; // Geschwindigkeit nach unten
        this.applyGravity();
        setInterval(() => {
            this.x += 7;
        }, 25);
    }

    /**
     * Animiert die Flaschenspritzanimation und ändert die Y-Geschwindigkeit.
     */
    bottleSplashAnimation() {
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        this.speedY = -25;
    }

    /**
     * Überprüft, ob die Flasche auf dem Boden ist.
     * @returns {boolean} - True, wenn die Flasche auf dem Boden ist, sonst False.
     */
    bottleIsOnTheGround() {
        return this.posY >= 80;
    }
}