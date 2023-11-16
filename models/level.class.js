class Level {
    enemies;
    clouds;
    coins;
    backgroundObject;
    level_end_x = 2200;

    constructor(enemies, clouds, coins, backgroundObject) {
        this.enemies = enemies;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
    }
}