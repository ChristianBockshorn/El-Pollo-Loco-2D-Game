/**
 * @type {HTMLCanvasElement} canvas - The canvas element.
 * @type {World} world - The World object.
 * @type {HTMLButtonElement} startButton - The start button element.
 * @type {Keyboard} keyboard - The Keyboard object.
 */
let canvas;
let world;
let startButton;
let keyboard;


/**
 * Starts the game.
 */
function startGame() {
    world.endbossInit();
    world.movingChicken();
    startScreen = document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('mobile_buttons').classList.remove("d-none");
    document.getElementById('audioInGameBtn').classList.add("d-none");
    world.losing_sound.pause();
}

/**
 * Initializes the game.
 */
function init() {
    canvas = document.getElementById('canvas');
    initLevel();
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
}

/**
 * Restarts the game.
 */
function restart() {
    location.reload();
}

/**
 * Enables fullscreen mode and starts the game.
 */
function fullscreen() {
    let canvas = document.getElementById('canvas');
    canvas.requestFullscreen();
    startScreen = document.getElementById('startScreen').classList.add('d-none');
    openFullscreen(canvas);
    startGame();
}

/**
 * Opens fullscreen mode for a given element.
 * @param {HTMLElement} element - The HTML element to display in fullscreen mode.
 */
function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
    }
}

/**
 * Closes fullscreen mode.
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

/**
 * Displays the controls.
 */
function controls() {
    document.getElementById('controls-bg').classList.remove('d-none');
}

/**
 * Closes the controls.
 */
function closeControls() {
    document.getElementById('controls-bg').classList.add('d-none');
}

/**
 * Prevents the popup from closing.
 * @param {Event} event - The event object.
 */
function doNotClosePopup(event) {
    event.stopPropagation();
}

/**
 * Displays the end screen.
 */
function endScreen() {
    document.getElementById('endScreen').classList.remove('d-none');
}

/**
 * Toggles the audio on and off.
 */
function audio() {
    if (world.walking_sound.muted) {
        world.walking_sound.muted = false;
        world.losing_sound.muted = false;
        document.getElementById('audioBtn').innerText = "volume_up";
    } else {
        world.walking_sound.muted = true;
        world.losing_sound.muted = true;
        document.getElementById('audioBtn').innerText = "volume_off";
    }
}

/**
 * Toggles the audio on and off.
 */
function audioInGame() {
    if (world.walking_sound.muted) {
        world.walking_sound.muted = false;
        world.losing_sound.muted = false;
        document.getElementById('audioBtn').innerText = "volume_up";
    } else {
        world.walking_sound.muted = true;
        world.losing_sound.muted = true;
        document.getElementById('audioBtn').innerText = "volume_off";
    }
}