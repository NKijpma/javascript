//2ds.js

// verstopte functies idk is de main code wat mooier zo


export function no_pokemon() {
    document.querySelector("#pokemon_name_id_typing").innerHTML = "No pokemon found";
    document.querySelector("#pokemon_image").src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-question.png";
    document.querySelector("#pokemon_stats").innerHTML = "";
}

export function poke_info(name, id, typing) {
    const pokemon = document.querySelector("#pokemon_name_id_typing");

    pokemon.innerHTML = `
    <div>${name} ${'#' + id}</div>
    <div id="pokemon_typing">${typing}</div>
    `;
}

export function poke_stats(height, weight, exp) {
    const statsBox = document.querySelector("#pokemon_stats");

    statsBox.innerHTML = `
        <div>Height: ${height}</div>
        <div>Weight: ${weight}</div>
        <div>Base EXP: ${exp}</div>
    `;
}

export function reset_pokemon() {
    document.querySelector("#pokemon_name_id_typing").innerHTML = "";
    document.querySelector("#pokemon_image").src = "";
    document.querySelector("#pokemon_stats").innerHTML = "";
}

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