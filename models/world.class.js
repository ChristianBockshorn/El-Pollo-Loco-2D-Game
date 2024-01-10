/**
 * Represents the game world containing characters, enemies, and other elements.
 */
class World {
    /**
   * The main character in the world.
   * @type {Character}
   */
    character = new Character();

    keyboard;

    /**
     * The current level configuration.
     * @type {Level}
     */
    level = level1;

    levelBackground = level1.backgroundObject;

    /**
     * The 2D rendering context of the canvas.
     * @type {CanvasRenderingContext2D}
     */
    ctx;

    /**
     * The HTML canvas element.
     * @type {HTMLCanvasElement}
     */
    canvas;

    /**
     * The keyboard input manager.
     * @type {Keyboard}
     */
    keyboard;

    /**
     * The camera's x-coordinate position.
     * @type {number}
     */
    camera_x = 0;

    /**
     * Status bar for the character's health.
     * @type {StatusBarHealth}
     */
    statusBarHealth = new StatusBarHealth();

    /**
     * Status bar for the end boss's health.
     * @type {StatusBarEndboss}
     */
    statusBarEndboss = new StatusBarEndboss();

    /**
     * Status bar for collected coins.
     * @type {StatusBarCoins}
     */
    statusBarCoins = new StatusBarCoins();

    /**
     * Status bar for collected bottles.
     * @type {StatusBarBottle}
     */
    statusBarBottle = new StatusBarBottle();

    /**
     * Array of throwable objects in the world.
     * @type {ThrowableObject[]}
     */
    throwableObjects = [];

    /**
     * The number of collected coins.
     * @type {number}
     */
    coinsCollect = 0;

    /**
     * The number of collected bottles.
     * @type {number}
     */
    collectedBottles = 0;

    /**
     * Audio icon element for sound control.
     * @type {HTMLAudioElement}
     */
    soundIcon = document.getElementById('audioBtn');

    /**
     * Flag indicating if the character has thrown a bottle.
     * @type {boolean}
     */
    hasThrown = false;

    /**
     * Flag indicating if the bottle has hit the end boss.
     * @type {boolean}
     */
    bottleStrikesEndboss = false;

    /**
     * Flag indicating if the end boss is vulnerable to attacks.
     * @type {boolean}
     */
    endbossNotVulnerable = false;

    /**
     * Flag indicating if the character is vulnerable to attacks.
     * @type {boolean}
     */
    characterNotVulnerable = false;

    /**
     * Audio object for losing sound.
     * @type {Audio}
     */
    losing_sound = new Audio('audio/losing.mp3');

    /**
     * Audio object for walking sound.
     * @type {Audio}
     */
    walking_sound = new Audio('audio/walking.mp3');




    /**
     * Constructs a new World object.
     * @param {HTMLCanvasElement} canvas - The HTML canvas element.
     * @param {Keyboard} keyboard - The keyboard input manager.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Sets the world reference for the character.
     */
    setWorld() {
        this.character.world = this;
    }

    endbossInit() {
        this.endboss = level1.endboss[0];
    }


    /**
     * Initiates game loop intervals for collision checks and throwable object updates.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkthrowObjects();
        }, 90);
    }

    /**
     * Checks for user input to throw objects and updates throwable objects accordingly.
     */
    checkthrowObjects() {
        if (this.keyboard.D && this.collectedBottles > 0) {
            if (!this.hasThrown) {
                this.hasThrown = true;
                this.collectedBottles--;
                let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.reduceBottleByThrowing();
                let resetThrowStatus = () => {
                    this.hasThrown = false;
                };
                setTimeout(resetThrowStatus, 20000);
            }
        } else {
            this.hasThrown = false;
        }
    }
   

    /**
     * Reduces the collected bottles by one and updates the bottle status bar.
     */
    reduceBottleByThrowing() {
        this.statusBarBottle.collected--;
        this.statusBarBottle.setCollected(this.statusBarBottle.collected);
    }

    /**
     * Checks for collisions between various game elements.
     */
    checkCollisions() {
        this.checkCollisionsEnemies();
        this.checkCollisionsCoins();
        this.checkCollisionsBottle();
        this.checkCollisionsEndboss();
        this.checkCollisionsBottleWithEndboss();
        this.checkCollisionsBottleWithEnemies();
    };

    /**
     * Checks for collisions between the character and enemies, handles enemy interactions.
     */
    checkCollisionsEnemies() {
        this.level.enemies.forEach((obj) => {
            if (this.character.isColliding(obj) && !obj.isDead()) {
                if (this.character.isAboveGround() && !this.character.isHurt()) {
                    obj.kill();
                    obj.stopMoving();
                    this.checkIfEnemyIsDead(obj);
                } else {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                }
            }
        });
    }

    /**
   * Checks for collisions between the character and Endboss, handles enemy interactions.
   */
    checkCollisionsEndboss() {
        this.level.endboss.forEach((obj) => {
            if (this.character.isColliding(obj) && !obj.isDead()) {
                if (this.character.isAboveGround() && !this.character.isHurt()) {
                    obj.kill();
                    obj.stopMoving();
                    this.checkIfEnemyIsDead(obj);
                } else {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                }
            }
        });
    }

    /**
     * Checks if an enemy is dead and removes it from the map after a delay.
     * @param {Enemy} obj - The enemy object to check.
     */
    checkIfEnemyIsDead(obj) {
        if (obj.energy === 0) {
            this.removeEnemyfromMap(obj);
        }
    }

    /**
     * Removes an enemy from the map after a delay.
     * @param {Enemy} obj - The enemy object to remove.
     */
    removeEnemyfromMap(obj) {
        setTimeout(() => {
            obj.stopMoving();
            this.level.enemies.splice(this.level.enemies.indexOf(obj), 1);
        }, 1000);
    }

    /**
     * Checks for collisions between the character and coins, handles coin collection.
     */
    checkCollisionsCoins() {
        this.level.coins.forEach((obj, i) => {
            if (this.character.isColliding(obj)) {
                this.removeCoinsFromMap(i);
            }
        });
    }

    /**
     * Checks for collisions between the character and bottles, handles bottle collection.
     */
    checkCollisionsBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottleCollected(bottle);
                this.reduceBottleBar();
            }
        });
    }

    /**
     * Handles the collection of a bottle, updating the collected count and removing it from the level.
     * @param {Bottle} bottle - The bottle object to collect.
     */
    bottleCollected(bottle) {
        this.collectedBottles++;
        let i = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(i, 1);
    }

    /**
     * Reduces the bottle count on the status bar when a bottle is thrown.
     */
    reduceBottleBar() {
        this.statusBarBottle.collected++;
        this.statusBarBottle.setCollected(this.statusBarBottle.collected);
    }

    /**
     * Removes coins from the map based on the given index, updating the character's collected coins and status bar.
     * @param {number} i - The index of the coin to remove from the level.
     */
    removeCoinsFromMap(i) {
        this.level.coins.splice(i, 1);
        this.character.isCollectedCoins();
        this.statusBarCoins.setCoins(this.character.collectedCoins);
    }

    /**
     * Checks for collisions between throwable objects and the end boss, triggering interactions.
     */
    checkCollisionsBottleWithEndboss() {
        setInterval(() => {
            this.throwableObjects.forEach((bottle) => {
                this.level.endboss.forEach((endboss) => {
                    if (bottle.isColliding(endboss)) {
                        bottle.bottleSplashAnimation();
                        // Nur wenn der Endboss nicht bereits verletzt ist
                        if (!endboss.isHurt()) {
                            endboss.hurtEndboss();
                            endboss.endbossIsDead();
                            this.statusBarEndboss.setPercentage(this.endboss.endbossEnergy);
                        }
                    }
                });
            });
        }, 200);
    }

    /**
     * Checks for collisions between throwable objects and enemies, triggering interactions.
     */
    checkCollisionsBottleWithEnemies() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((obj) => {
                if (bottle.isColliding(obj)) {
                    obj.kill();
                    obj.stopMoving();
                    this.checkIfChickenIsDead(obj);
                    bottle.bottleSplashAnimation();
                }
            });
        });
    }

    /**
     * Checks if a chicken enemy is dead and removes it from the map after a delay.
     * @param {Enemy} obj - The chicken enemy object to check.
     */
    checkIfChickenIsDead(obj) {
        if (obj.energy === 0) {
            this.removeChickenfromMap(obj);
        }
    }

    /**
     * Removes a chicken enemy from the map after a delay.
     * @param {Enemy} obj - The chicken enemy object to remove.
     */
    removeChickenfromMap(obj) {
        setTimeout(() => {
            this.level.enemies.splice(this.level.enemies.indexOf(obj), 1);
        }, 1000);
    }

    /**
     * Draws the game world, including characters, enemies, and status bars.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.levelBackground);
        this.addToMap(this.character);
        this.addObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.addStatusbarsToMap();
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    /**
     * Adds status bars to the map, including health, coins, and bottles.
     */
    addStatusbarsToMap() {
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottle);
        if (this.seeEndboss()) {
            this.addToMap(this.statusBarEndboss);
        }
    }

    /**
     * Checks if the character has reached a point where the end boss status bar should be displayed.
     * @returns {boolean} - True if the end boss status bar should be displayed, otherwise false.
     */
    seeEndboss() {
        return (
            this.character.x >= 1450
        );
    }

    /**
     * Adds an array of objects to the map.
     * @param {Array} objects - The array of objects to add to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    /**
     * Adds objects to the map, including clouds, coins, end bosses, bottles, enemies, and throwable objects.
     */
    addObjects() {
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
    }

    /**
     * Adds a game object to the map, applying transformations if needed.
     * @param {GameObject} mo - The game object to add to the map.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    /**
     * Flips the image horizontally to handle objects facing the opposite direction.
     * @param {GameObject} mo - The game object to flip.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Reverts the image back to its original state after flipping.
     * @param {GameObject} mo - The game object to revert.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
     * Moves the chickens in the level.
     */
    movingChicken() {
        this.level.enemies.forEach(chicken => {
            chicken.moving();
        })
    }


}