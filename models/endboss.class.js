class Endboss extends MovableObject {
    y = 80;
    height = 400;
    width = 230;
    
    

    Images_Walking = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    
    Images_Alert = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    Images_Attack = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    Images_Hurt = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    Images_Dead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];



    constructor() {
        super().loadImage(this.Images_Walking[0]);
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Alert);
        this.loadImages(this.Images_Attack);
        this.loadImages(this.Images_Hurt);
        this.loadImages(this.Images_Dead);

        this.x = 2000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.Images_Dead);
            } else if (this.hurtEndboss()) {
                this.playAnimation(this.Images_Hurt);
            } if (this.seeCharacterAlert()) {
                this.playAnimation(this.Images_Alert);
            } else if (this.seeCharacterAttack()) {
                this.playAnimation(this.Images_Attack);
            }
        }, 200);

    }




}