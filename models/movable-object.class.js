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



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 245;
        }
    }


    isColliding(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
        // return this.x + this.width > mo.x &&
        //     this.y + this.height > mo.y &&
        //     this.x < mo.x &&
        //     this.y < mo.y + mo.height;

        // return (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
        //     (this.y + this.offsety + this.height) >= obj.y &&
        //     (this.y + this.offsety) <= (obj.y + obj.height) &&
        //     obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); //Zeitpunkt speichern
        }
    }

    //isHurt für true oder false wird returnt
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Differenz in ms
        timepassed = timepassed / 1000; //Differenz in s
        return timepassed < 1.5;
    }

    hurtEndboss() {
        this.endbossEnergy -= 50;
        if (this.endbossEnergy < 0) {
            this.endbossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    endbossIsDead() {
        return this.endbossEnergy == 0;
    }

    isDead() {
        return this.energy == 0;
    }

    kill() {
        this.energy = 0;
    }


    seeCharacterAlert() {
        return (
            world.character.x >= 1450 && world.character.x < 1475
        );
    }

    seeCharacterAttack() {
        return (
            world.character.x >= 1475
        );
    }

    isCollectedCoins() {
        this.collectedCoins += 10;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length; //let i=7 % 6; => 1,Rest 1
        // i= 0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,.....
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }

    stopMoving() {
        this.x += this.stop;
    }


    jump() {
        this.speedY = 30;
    }

    stopGame() {
        if (world.character.energy == 0) {
            document.getElementById('endScreen').classList.remove('d-none');
            world.level.enemies.forEach((chicken) => {
                chicken.speed = 0;
                clearInterval;
            });

        } else if (this.animationEnded = true) {
            document.getElementById('endScreen').classList.remove('d-none');
        }

 n
    }
}