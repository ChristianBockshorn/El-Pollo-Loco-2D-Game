class World {
    character = new Character();

    endboss = level1.endboss[0];
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusBarHealth();
    statusBarEndboss = new StatusBarEndboss();
    statusBarCoins = new StatusBarCoins();
    statusBarBottle = new StatusBarBottle();
    throwableObjects = [];
    coinsCollect = 0;
    collectedBottles = 0;




    bottleStrikesEndboss = false;
    endbossNotVulnerable = false;
    characterNotVulnerable = false;




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkthrowObjects();
        }, 200);
    }


    checkthrowObjects() {
        if (this.keyboard.D && this.collectedBottles > 0) {
            this.collectedBottles--;
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100) //Position, wo die Flasche aus den Händen geworfen wird 
            this.throwableObjects.push(bottle);
            this.reduceBottleByThrowing();
        }
    };


    reduceBottleByThrowing() {
        this.statusBarBottle.collected--;
        this.statusBarBottle.setCollected(this.statusBarBottle.collected);
    }


    checkCollisions() {
        this.checkCollisionsEnemies();
        this.checkCollisionsCoins();
        this.checkCollisionsBottle();
        this.checkCollisionsBottleWithEndboss();
        this.checkCollisionsBottleWithEnemies();
    };


    checkCollisionsEnemies() {
        this.level.enemies.forEach((obj) => {
            if (this.character.isColliding(obj) && !obj.isDead()) {
                if (this.character.isAboveGround() && !this.character.isHurt()) {
                    obj.kill();
                    obj.stopMoving();
                    this.checkIfEnemyIsDead(obj);
                    console.log('chicken is killed!');
                } else {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                }
            }
        });
    }


    checkIfEnemyIsDead(obj) {
        if (obj.energy === 0) {
            this.removeEnemyfromMap(obj);
        }
    }


    removeEnemyfromMap(obj) {
        setTimeout(() => {
            obj.stopMoving();
            this.level.enemies.splice(this.level.enemies.indexOf(obj), 1);
        }, 1000);
    }


    checkCollisionsCoins() {
        this.level.coins.forEach((obj, i) => {
            if (this.character.isColliding(obj)) {
                this.removeCoinsFromMap(i);
            }
        });
    }


    checkCollisionsBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottleCollected(bottle);
                this.reduceBottleBar();
            }
        });
    }


    bottleCollected(bottle) {
        this.collectedBottles++;
        let i = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(i, 1);
    }


    reduceBottleBar() {
        this.statusBarBottle.collected++;
        this.statusBarBottle.setCollected(this.statusBarBottle.collected);
    }


    removeCoinsFromMap(i) {
        this.level.coins.splice(i, 1);
        this.character.isCollectedCoins();
        this.statusBarCoins.setCoins(this.character.collectedCoins);
    }

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


    checkCollisionsBottleWithEnemies() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((obj) => {
                if (bottle.isColliding(obj)) {
                    obj.kill();
                    obj.stopMoving();
                    this.checkIfChickenIsDead(obj);
                    console.log('chicken is killed!');
                    bottle.bottleSplashAnimation();
                }
            });
        });
    }

    checkIfChickenIsDead(obj) {
        if (obj.energy === 0) {
            this.removeChickenfromMap(obj);
        }
    }


    removeChickenfromMap(obj) {

        setTimeout(() => {

            this.level.enemies.splice(this.level.enemies.indexOf(obj), 1);
        }, 1000);


    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObject);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);



        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        if (this.seeEndboss()) {
            this.addToMap(this.statusBarEndboss);
        }
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarCoins);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    seeEndboss() {
        return (
            this.character.x >= 1450
        );
    }


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


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


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    movingChicken() {
        this.level.enemies.forEach(chicken => {
            chicken.moving();
        })
    }
}