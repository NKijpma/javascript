// eindopdracht.js

// import clear van 2ds.js
import {no_pokemon, poke_info, poke_stats, reset_pokemon} from "./2ds.js";


const searchInput = document.getElementById("search");

let shiny = false;
const img = document.querySelector("#pokemon_image");

img.addEventListener("click", () => {
    const id = img.dataset.id;
    if (!id) return;

    shiny = !shiny;

    if (shiny) {
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${id}.gif`;
    } else {
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
    }

    searchInput.focus();
});


// search werkt met enter
document.querySelector("#search").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.querySelector("#search_button").click();
    }
});
// search vanaf search button
document.querySelector("#search_button").addEventListener('click', async function () {
    const q = document.querySelector("#search").value;
    // stuur search en geef terug data
    const response = await fetch("php/database.php?q=" + q, {cache: "no-store"});
    const data = await response.json();
    // als data geen resultaat geeft maakt alles leeg


    if (!Array.isArray(data) || data.length === 0) {
        reset_pokemon();
        no_pokemon();
        searchInput.focus();
        return;
    }


    const p = data[0]; // haalt alleen de eerste pokemon uit de db


    //name & id
    let name = p.pok_name
    let id = p.pok_id
    //stats
    let types = [];
    let height = p.pok_height / 10 + "M"
    let weight = p.pok_weight / 10 + "KG"
    let exp = p.pok_base_experience

    // loopt door totdat tot dat alle types zijn gevonden
    data.forEach(pokemon => {
        if (pokemon.pok_id === id && !types.includes(pokemon.type_name)) {
            types.push(pokemon.type_name);
        }
    });

    //typing (used for type images)
    const typechart = {
        "normal": 1,
        "fighting": 2,
        "flying": 3,
        "poison": 4,
        "ground": 5,
        "rock": 6,
        "bug": 7,
        "ghost": 8,
        "steel": 9,
        "fire": 10,
        "water": 11,
        "grass": 12,
        "electric": 13,
        "psychic": 14,
        "ice": 15,
        "dragon": 16,
        "dark": 17,
        "fairy": 18
    };


    // images met corresponding types
    let typeIcons = types.map(t => {
        let typeId = typechart[t];
        return `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${typeId}.png" alt="">`;
    });

    // Sprite/image werkt met de id ding en image
    const img = document.querySelector("#pokemon_image");

    img.dataset.id = id;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
    shiny = false;


    //name, id and typing
    poke_info(name, id, typeIcons.join(" "));

    // Stats
    poke_stats(height, weight, exp);

    // focus search
    searchInput.focus();

});