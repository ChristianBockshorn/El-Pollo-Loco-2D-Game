/**
 * @type {HTMLCanvasElement} canvas - The canvas element.
 * @type {World} world - The World object.
 * @type {HTMLButtonElement} startButton - The start button element.
 * @type {Keyboard} keyboard - The Keyboard object.
 */
let canvas;
let world;
let startButton;
let keyboard = new Keyboard();

/**
 * Initializes the game.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * Starts the game.
 */
function startGame() {
    world.movingChicken();
    startScreen = document.getElementById('startScreen').classList.add('d-none');
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
    if (world.character.walking_sound.muted) {
        world.character.walking_sound.muted = false;
        document.getElementById('audioBtn').innerText = "volume_up";
    } else {
        world.character.walking_sound.muted = true;
        document.getElementById('audioBtn').innerText = "volume_off";
    }
}

/**
 * Event listener for keydown events.
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

/**
 * Event listener for keyup events.
 */
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});