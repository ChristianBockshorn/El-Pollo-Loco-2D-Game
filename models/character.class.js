class Character extends MovableObject {
    world;
    speed = 5;
    y = 80; // Position bis wohin er springt
    offset = {
        top: 50,
        bottom: 20,
        left: 30,
        right: 30,
    };
    walking_sound = new Audio('audio/running.mp3');

    Images_Walking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    Images_Jumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    Images_Dead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    Images_Hurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    Images_Idle = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png",
    ];


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Jumping);
        this.loadImages(this.Images_Dead);
        this.loadImages(this.Images_Hurt);
        this.loadImages(this.Images_Idle);
        this.animate();
        this.applyGravity();
    }


    animate() {
        this.characterMovingAnimation = setInterval(() => {
            this.characterMoving();
        }, 1000 / 60);

        this.characterIdleAnimation = setInterval(() => {
            this.characterIdle();

        }, 500);

        this.characterAnimation = setInterval(() => {
            this.characterAnimate();

        }, 100);
    }


    characterMoving() {
        this.walking_sound.pause();
        if (this.canMoveRight()) {//X-koordinate erhöhen
            this.moveRight();
        }
        if (this.canMoveLeft()) { //X-koordinate verringern
            this.moveLeft();
        }
        if (this.canJump()) {//Gravitation-Springen
            this.jump();
        }
        this.world.camera_x = -this.x + 100;
    }


    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }


    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
    }


    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }


    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
    }


    canJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }


    jump() {
        this.speedY = 30;
    }


    characterIdle() {
        if (this.idle()) {
            this.playAnimation(this.Images_Idle);
        }
    }


    idle() {
        return (
            this.world.keyboard.RIGHT == false &&
            this.world.keyboard.LEFT == false &&
            this.world.keyboard.SPACE == false &&
            this.world.keyboard.D == false &&
            this.world.keyboard.UP == false &&
            this.world.keyboard.DOWN == false
        );
    }


    characterAnimate() {
        if (this.isDead()) {
            this.playDeadCharacterAnimation();
        } else if (this.isHurt()) {
            this.playAnimation(this.Images_Hurt);
        } if (this.isAboveGround()) {
            this.playAnimation(this.Images_Jumping);
        } else {
            if (this.pressRightOrLeft()) {
                this.playAnimation(this.Images_Walking) //Walk animation
            }
        }
    }


    pressRightOrLeft() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT
    }


    playDeadCharacterAnimation() {
        this.playAnimation(this.Images_Dead);
        this.stopGame();
    }
}