//2ds.js

// import functions van functions.js
import {pokemon_suggestions, reset_pokemon} from "./functions.js";

// aan uit 2ds
const on_button = document.getElementById("on_button");

const topScreen = document.getElementById("top-screen");
const bottomScreen = document.getElementById("bottom-screen");

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search_button");

let powered = false;

on_button.addEventListener("click", () => {
    powered = !powered;

    if (powered) {
        document.getElementById("outer-shell").classList.add("glow");


        topScreen.className = "";
        bottomScreen.className = "";

        searchInput.classList.add("hidden");
        searchButton.classList.add("hidden");

        topScreen.classList.add("screen-on-top");
        bottomScreen.classList.add("screen-on-bottom");

        setTimeout(() => {
            topScreen.className = "dex-top";
            bottomScreen.className = "dex-bottom";

            searchInput.classList.remove("hidden");
            searchInput.classList.add("visible");

            searchButton.classList.remove("hidden");
            searchButton.classList.add("visible");

            searchInput.focus();
            pokemon_suggestions()
        }, 1000);
    } else {
        document.getElementById("outer-shell").classList.remove("glow");

        topScreen.className = "off";
        bottomScreen.className = "off";

        searchInput.classList.remove("visible");
        searchInput.classList.add("hidden");

        searchButton.classList.remove("visible");
        searchButton.classList.add("hidden");

        reset_pokemon();
        searchInput.value = "";
    }
});

