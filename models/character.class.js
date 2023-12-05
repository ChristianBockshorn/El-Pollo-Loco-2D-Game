class Character extends MovableObject {
    world;
    speed = 2;
    y = 80;
    offset = {
        top: 120,
        bottom: 10,
        left: 40,
        right: 30
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




    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Jumping);
        this.loadImages(this.Images_Dead);
        this.loadImages(this.Images_Hurt);


        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            //X-koordinate erhöhen
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            //X-koordinate verringern
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;

            //Gravitation-Springen
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }

        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.Images_Dead);
            } else if (this.isHurt()) {
                this.playAnimation(this.Images_Hurt);
            } if (this.isAboveGround()) {
                this.playAnimation(this.Images_Jumping);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    //Walk animation
                    this.playAnimation(this.Images_Walking)
                }
            }
        }, 100);
    }

    jump() {
        this.speedY = 30;
    }


}