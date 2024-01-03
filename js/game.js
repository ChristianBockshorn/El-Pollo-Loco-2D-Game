let canvas;
let world;
let startButton;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function startGame() {
    world.movingChicken();
    startScreen = document.getElementById('startScreen').classList.add('d-none');
}


function restart() {
    location.reload();
}


function fullscreen() {
    let canvas = document.getElementById('canvas');
    canvas.requestFullscreen();
    startScreen = document.getElementById('startScreen').classList.add('d-none');
    openFullscreen(canvas);
    startGame();
}


/* Open fullscreen */
function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
    }
}


/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}


function controls() {
    document.getElementById('controls-bg').classList.remove('d-none');
}


function closeControls() {
    document.getElementById('controls-bg').classList.add('d-none');
}


function doNotClosePopup(event) {
    event.stopPropagation();
}


function endScreen() {
    document.getElementById('endScreen').classList.remove('d-none');
}


function audio() {
    console.log('Audio ausschalten')
    // world.character.walking_sound.muted = true;
    // document.getElementById('audioBtn').innerText = "volume_off";

    if (world.character.walking_sound.muted = true) {
        document.getElementById('audioBtn').innerText = "volume_off";
    } if (world.character.walking_sound.muted = false) {
        document.getElementById('audioBtn').innerText = "volume_up";
    }

}


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


