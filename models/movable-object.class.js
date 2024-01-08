/**
 * @class
 * @extends {DrawableObject}
 * @property {number} stop - The stop value of the object.
 * @property {number} speed - The speed of the object.
 * @property {boolean} otherDirection - The direction of the object.
 * @property {number} speedY - The vertical speed of the object.
 * @property {number} acceleration - The acceleration of the object.
 * @property {number} energy - The energy level of the object.
 * @property {number} chickenEnergy - The energy level of the chicken.
 * @property {number} endbossEnergy - The energy level of the endboss.
 * @property {number} lastHit - The timestamp of the last hit.
 * @property {Object} offset - The offset values for the object.
 * @property {number} collectedCoins - The number of coins collected.
 * @property {number} collectedBottles - The number of bottles collected.
 */
class MovableObject extends DrawableObject {
    stop = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    chickenEnergy = 100;
    endbossEnergy = 100;
    lastHit = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    collectedCoins = 0;
    collectedBottles = 0;
    /**
     * Audio object for losing sound.
     * @type {Audio}
     */
    losing_sound = new Audio('audio/losing.mp3');


    /**
    * Applies gravity to the object.
    */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /**
     * Checks if the object is above the ground.
     * @returns {boolean} True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 245;
        }
    }

    /**
     * Checks if the object is colliding with another object.
     * @param {MovableObject} mo - The other object to check collision with.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Reduces the energy of the object when it is hit.
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is hurt.
     * @returns {boolean} True if the object is hurt, false otherwise.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1.5;
    }


    /**
     * Hurts the endboss.
     */
    hurtEndboss() {
        this.endbossEnergy -= 20;
        if (this.endbossEnergy < 0) {
            this.endbossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the endboss is dead.
     * @returns {boolean} True if the endboss is dead, false otherwise.
     */
    endbossIsDead() {
        return this.endbossEnergy == 0;
    }

    /**
     * Checks if the object is dead.
     * @returns {boolean} True if the object is dead, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Kills the object.
     */
    kill() {
        this.energy = 0;
    }

    /**
     * Checks if the character is in alert range.
     * @returns {boolean} True if the character is in alert range, false otherwise.
     */
    seeCharacterThanAlert() {
        return world.character.x >= 1450 && world.character.x < 1475
    }

    /**
     * Checks if the character is in attack range.
     * @returns {boolean} True if the character is in attack range, false otherwise.
     */
    seeCharacterAttack() {
        return (
            world.character.x >= 1475
        );
    }

    /**
     * Increases the number of coins collected.
     */
    isCollectedCoins() {
        this.collectedCoins += 10;
    }


    /**
     * Plays an animation.
     * @param {string[]} images - The array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; //let i=7 % 6; => 1,Rest 1
        // i= 0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,.....
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Stops the object from moving.
     */
    stopMoving() {
        this.speed = 0;
    }

    /**
     * Makes the object jump.
     */
    jump() {
        this.speedY = 30;
    }


    /**
     * Stops the game.
     */
    stopGame() {
        if (world.character.energy == 0) {
            document.getElementById('endScreen').classList.remove('d-none');
            this.clearWorldLevelIntervalls();
            this.stopGameIntervall();
            world.losing_sound.play();
        } else if (this.animationEnded = true) {
            document.getElementById('endScreenIfWin').classList.remove('d-none');
            this.clearWorldLevelIntervalls();
            this.stopGameIntervall();
        }
    }

    /**
     * Clears the intervals for all objects in the world level.
     */
    clearWorldLevelIntervalls() {
        world.level.enemies.forEach((chicken) => {
            chicken.speed = 0;
            clearInterval(chicken.chickenAnimation);
        });
        world.level.bottles.forEach((bottle) => {
            clearInterval(bottle.bottlesAnimation);
        });
        world.level.coins.forEach((coin) => {
            clearInterval(coin.coinAnimation);
        });
        world.level.endboss.forEach((endboss) => {
            clearInterval(endboss.endbossInterval);
        });
    }

    /**
     * Stops the game interval.
     */
    stopGameIntervall() {
        clearInterval(world.character.characterAnimation);
        clearInterval(world.character.characterIdleAnimation);
        clearInterval(world.character.characterMovingAnimation);
    }
}