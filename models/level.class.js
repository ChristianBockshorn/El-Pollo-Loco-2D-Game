class Level {
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObject;
    level_end_x = 2200;

    constructor(enemies, clouds, coins, bottles, backgroundObject) {
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
    }
}