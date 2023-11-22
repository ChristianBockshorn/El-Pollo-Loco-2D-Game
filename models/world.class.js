class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusBarHealth();
    statusBarCoins = new StatusBarCoins();
    statusBarBottle = new StatusBarBottle();
    throwableObjects = [];
    coinsCollect = 0;
    bottlesCollect = 0;
    


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
        if (this.keyboard.D && this.bottlesCollect > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100)
            this.throwableObjects.push(bottle);
            // this.throwBottle();
            this.character.reduceBottleByThrowing();
            this.statusBarBottle.setBottles(this.character.bottlesCollect);

        }
    };

    // throwBottle() {
    //     if (this.amountOfBottles.length > 0) {
    //         let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100);
    //         this.throwableObjects.push(bottle);

    //         // // Aktualisieren der Anzeige 
    //         // this.statusBarBottle.setBottles(this.amountOfBottles.length);
    //     }

    // }

    checkCollisions() {
        this.level.enemies.forEach((obj) => {
            if (this.character.isColliding(obj)) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
                // console.log('Collision with Character', this.character.energy);
            }
        });

        this.level.coins.forEach((obj, i) => {
            if (this.character.isColliding(obj)) {
                this.removeCoinsFromMap(i);
            }
        });

        this.level.bottles.forEach((obj, b) => {
            if (this.character.isColliding(obj)) {
                this.removeBottlesFromMap(b);
                this.bottlesCollect++;
            }
        });

    };

    removeCoinsFromMap(i) {
        this.level.coins.splice(i, 1);
        this.character.isCollectedCoins();
        this.statusBarCoins.setCoins(this.character.collectedCoins);
        // console.log('Coins collected', this.character.collected());
    }

    removeBottlesFromMap(b) {
        this.level.bottles.splice(b, 1);
        this.character.isCollectedBottles();
        // if (this.amountOfBottles.length < 5) {
        // this.amountOfBottles.push(b);
        // this.amountOfBottles.length;

        // console.log('bottles length', this.amountOfBottles.length);
        // this.amountOfBottles.splice(b, 1);

        // }
        // this.statusBarBottle.setBottles(this.character.collectedBottles);
        this.statusBarBottle.setBottles(this.character.bottlesCollect)
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
        this.addToMap(this.statusBarCoins);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
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
}