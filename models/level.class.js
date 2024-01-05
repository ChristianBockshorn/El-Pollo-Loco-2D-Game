/**
 * @class
 * @classdesc This class represents a level in the game.
 */
class Level {
    /**
     * @property {Object} enemies - The enemies in the level.
     * @property {Object} endboss - The end boss of the level.
     * @property {Object} clouds - The clouds in the level.
     * @property {Object} coins - The coins in the level.
     * @property {Object} bottles - The bottles in the level.
     * @property {Object} backgroundObject - The background object of the level.
     * @property {number} level_end_x - The x-position of the level end. Default value is 2200.
     */
    enemies;
    endboss;
    clouds;
    coins;
    bottles;
    backgroundObject;
    level_end_x = 2200;

    constructor(enemies, endboss, clouds, coins, bottles, backgroundObject) {
        this.enemies = enemies,ChickenSmall;
        this.endboss = endboss;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
    }
}