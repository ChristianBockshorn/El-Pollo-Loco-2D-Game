class Level {
    enemies;
    endboss;
    clouds;
    coins;
    bottles;
    backgroundObject;
    level_end_x = 2200;

    constructor(enemies, endboss, clouds, coins, bottles, backgroundObject) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
    }
}