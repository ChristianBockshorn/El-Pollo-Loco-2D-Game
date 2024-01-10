/**
 * @class
 * This class represents a keyboard with various keys.
 * @description
 * @type {boolean}
 * @Left arrow key on the keyboard for going to left
 * @Right arrow key on the keyboard for going to right
 * @Up arrow key on the keyboard.
 * @Down arrow key on the keyboard.
 * @Space bar on the keyboard for jump
 * @D key on the keyboard for throw
 */
class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    THROW_REQUEST_STOP = new Date().getTime();
    THROW_REQUEST_START = 0;

    constructor() {
        this.bindKeyPressEvents();
        this.bindBtsPressEvents();
    }


    /**
         * bindBtsPressEvents() is for the mobile screen buttons
         */
    bindBtsPressEvents() {
        document.getElementById('leftBtn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });

        document.getElementById('leftBtn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });

        document.getElementById('rightBtn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });

        document.getElementById('rightBtn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });

        document.getElementById('jumpBtn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.SPACE = true;
        });

        document.getElementById('jumpBtn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.SPACE = false;
        });

        document.getElementById('throwBtn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            //if (this.THROW_REQUEST_STOP > this.THROW_REQUEST_START && )
            this.D = true;
        });

        document.getElementById('throwBtn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.THROW_REQUEST_STOP = new Date().getTime();
            this.D = false;
        });
    }






    bindKeyPressEvents() {

        /**
         * Event listener for keydown events.
         */
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 37) {
                this.LEFT = true;
            }

            if (e.keyCode == 39) {
                this.RIGHT = true;
            }

            if (e.keyCode == 38) {
                this.UP = true;
            }

            if (e.keyCode == 40) {
                this.DOWN = true;
            }

            if (e.keyCode == 32) {
                this.SPACE = true;
            }

            if (e.keyCode == 68) {
                this.D = true;
            }
        });



        /**
         * Event listener for keyup events.
         */
        window.addEventListener("keyup", (e) => {
            if (e.keyCode == 37) {
                this.LEFT = false;
            }

            if (e.keyCode == 39) {
                this.RIGHT = false;
            }

            if (e.keyCode == 38) {
                this.UP = false;
            }

            if (e.keyCode == 40) {
                this.DOWN = false;
            }

            if (e.keyCode == 32) {
                this.SPACE = false;
            }

            if (e.keyCode == 68) {
                this.D = false;
            }
        });




    }



}