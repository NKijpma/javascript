//2ds.js

// import functions van functions.js
import {pokemon_suggestions, reset_pokemon} from "./functions.js";
import {pause, play, playPauseBtn} from "./music.js";

// aan uit 2ds
const on_button = document.getElementById("on_button");
const led = document.getElementById("power-led");

const topScreen = document.getElementById("top-screen");
const bottomScreen = document.getElementById("bottom-screen");

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search_button");
//start uit
let powered = false;
// nodig voor het verwijderen van timeout
let power_timeout
// zorgt voor on bij spatie
document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        e.preventDefault();
        on_button.click();
    }
});
on_button.addEventListener("click", () => {
    powered = !powered;
    if (powered) {
        document.getElementById("shell").classList.add("glow");

        topScreen.className = "";
        bottomScreen.className = "";

        topScreen.classList.add("screen-on-top");
        bottomScreen.classList.add("screen-on-bottom");

        power_timeout = setTimeout(() => {
            play();
            playPauseBtn.textContent = '⏸';

            topScreen.className = "dex-top";
            bottomScreen.className = "dex-bottom";

            searchInput.classList.remove("hidden");
            searchButton.classList.remove("hidden");

            led.classList.add("power-led-on");
            led.classList.remove("power-led-off");

            searchInput.focus();
            pokemon_suggestions();
        }, 800);
    } else {
        document.getElementById("shell").classList.remove("glow");

        pause();
        playPauseBtn.textContent = '▶';

        clearTimeout(power_timeout);

        led.classList.remove("power-led-on");
        led.classList.add("power-led-off");

        topScreen.className = "off";
        bottomScreen.className = "off";

        searchInput.classList.add("hidden");
        searchButton.classList.add("hidden");

        reset_pokemon();
        searchInput.value = "";
    }
});