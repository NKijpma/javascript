// functions.js

// alle functions die in eindopdracht.js & 2ds.js gebruikt worden

export function focusSearch() {

    const searchInput = document.getElementById("search");

    searchInput.focus();

}

// op pokemon image klik swap normale pokemon gif naar shiny pokemon gif
export function shiny_swap() {

    const img = document.querySelector("#pokemon_image");

    let shiny = false;

    img.addEventListener("click", () => {
        const id = img.dataset.id;
        if (!id) return;

        shiny = !shiny;

        if (shiny) {
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${id}.gif`;
        } else {
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
        }

        focusSearch()
    });
}

// wat er gebeurt als geen pokemon gevonden word
export function no_pokemon() {
    document.querySelector("#pokemon_name_id_typing").innerHTML = "No pokemon found";
    document.querySelector("#pokemon_image").src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-question.png";
    document.querySelector("#pokemon_stats").innerHTML = "";
}

// ale name id typing info van een pokemon
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

export const typechart = {
    normal: 1,
    fighting: 2,
    flying: 3,
    poison: 4,
    ground: 5,
    rock: 6,
    bug: 7,
    ghost: 8,
    steel: 9,
    fire: 10,
    water: 11,
    grass: 12,
    electric: 13,
    psychic: 14,
    ice: 15,
    dragon: 16,
    dark: 17,
    fairy: 18
};

export function show_suggestion(id) {
    document.querySelector("#search").value = id;
    document.querySelector("#search_button").click();
}

export function pokemon_suggestions() {

    const container = document.querySelector("#suggestion-boxes");
    container.innerHTML = "";

    const ids = new Set();

    while (ids.size < 8) {
        ids.add(Math.floor(Math.random() * 721) + 1);
    }


    ids.forEach((id) => {

        const box = document.createElement("div");
        box.classList.add("suggestion-box");
        box.dataset.id = id;

        box.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif" alt="${id}">
            <span class="id-label">#${id}</span>
        `;


        box.addEventListener("click", () => {
            show_suggestion(id);
        });

        container.append(box);


    });
}

export function restart_animation(element) {
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = '';
}

export function reset_pokemon() {
    document.querySelector("#pokemon_name_id_typing").innerHTML = "";
    document.querySelector("#pokemon_image").src = "";
    document.querySelector("#pokemon_stats").innerHTML = "";
    document.querySelector("#suggestion-boxes").innerHTML = "";
}