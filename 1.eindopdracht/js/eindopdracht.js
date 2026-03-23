// eindopdracht.js

// import functions van functions.js
import {focusSearch, pokemon_suggestions,no_pokemon, poke_info, poke_stats, reset_pokemon, shiny_swap, typechart} from "./functions.js";


// swapt image naar shiny on click
shiny_swap()

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
        focusSearch()
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

    // images met corresponding types
    let typeIcons = types.map(t => {
        let typeId = typechart[t];
        return `<img src= https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${typeId}.png alt="">`;

        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${typeId}.png"
    });

    // Sprite/image werkt met de id ding en image
    const img = document.querySelector("#pokemon_image");

    img.dataset.id = id;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;


    //name, id and typing
    poke_info(name, id, typeIcons.join(" "));

    // Stats
    poke_stats(height, weight, exp);

    // focus search
    focusSearch()

    pokemon_suggestions();


    window.allPokemon = data;

});