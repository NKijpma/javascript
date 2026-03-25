const playlist = [
    //pokemon
    {src: "/js/1.eindopdracht/mp3/poke-mp3/pokemon-black-white-n-final-battle.mp3", name: "N Final Battle"},
    {src: "/js/1.eindopdracht/mp3/poke-mp3/pokemon-black-white-elite-four.mp3", name: "Elite Four"},
    {src: "/js/1.eindopdracht/mp3/poke-mp3/pewter-city-unused-hgss.mp3", name: "Pewter City"},
    {src: "/js/1.eindopdracht/mp3/poke-mp3/oras-zinnia-encounter.mp3", name: "Zinnia Encounter"},
    {src: "/js/1.eindopdracht/mp3/poke-mp3/oras-zinnia-battle.mp3", name: "Zinnia Battle"},
    // made in abyss
    {src: "/js/1.eindopdracht/mp3/mia-mp3/the-first-layer.mp3", name: "The First Layer"},
    {src: "/js/1.eindopdracht/mp3/mia-mp3/theme-of-reg.mp3", name: "Theme of Reg"},
    {src: "/js/1.eindopdracht/mp3/mia-mp3/to-the-abyss.mp3", name: "To the Abyss"},
    // takopi no genzai
    {src: "/js/1.eindopdracht/mp3/tng-mp3/journey-to-tokyo-takopi.mp3", name: "Journey to Tokyo"},
    {src: "/js/1.eindopdracht/mp3/tng-mp3/the-thing-i-could-do-for-you.mp3", name: "The thing"},
    {src: "/js/1.eindopdracht/mp3/tng-mp3/with-chappy-ill-be-alright.mp3", name: "chappy"},
    // wonder egg priority
    {src: "/js/1.eindopdracht/mp3/wep-mp3/WEP-Anti-OST.mp3", name: "anti-OST"},
    {src: "/js/1.eindopdracht/mp3/wep-mp3/WEP-Encounter-OST.mp3", name: "encounter-OST"},
    {src: "/js/1.eindopdracht/mp3/wep-mp3/WEP-Fight-Back-OST.mp3", name: "fightback-OST"}
];
//=====================
// change music volume
//=====================
const VOLUME = 0.05;
//=====================

//=====================
let current_track = (Math.floor(Math.random() * playlist.length));
let current_audio = new Audio(playlist[current_track].src);
current_audio.addEventListener('ended', () => next());
current_audio.volume = VOLUME;
let is_playing = false;


function update_name() {
    document.getElementById('music-name').textContent = playlist[current_track].name;
}

export function play() {
    current_audio.play().catch(console.error);
    is_playing = true;
}

export function pause() {
    current_audio.pause();
    is_playing = false;
}

function switch_track(index) {
    current_track = index;
    current_audio.addEventListener('ended', () => next());
    current_audio.pause();
    current_audio.volume = VOLUME;
    current_audio = new Audio(playlist[index].src);
    current_audio.play().catch(console.error);
    is_playing = true;
    update_name();
}

function next() {
    switch_track((current_track + 1) % playlist.length);
    current_audio.volume = VOLUME;

}

function previous() {
    switch_track((current_track - 1 + playlist.length) % playlist.length);
    current_audio.volume = VOLUME;
}

function random() {
    let new_track;
    do {
        new_track = Math.floor(Math.random() * playlist.length);
    }
    while (new_track === current_track);
    switch_track(new_track);
}


function toggle() {
    if (is_playing) pause(); else play();
    return is_playing;
}


// Buttons
export const playPauseBtn = document.getElementById('play-pause-button');

document.getElementById('play-pause-button').addEventListener('click', () => {
    const nowPlaying = toggle();
    playPauseBtn.textContent = nowPlaying ? '⏸' : '▶';
});

document.getElementById('forward-button').addEventListener('click', () => {
    next();
    playPauseBtn.textContent = '⏸';
});

document.getElementById('back-button').addEventListener('click', () => {
    previous();
    playPauseBtn.textContent = '⏸';
});

document.getElementById('random-button').addEventListener('click', () => {
    random();
    playPauseBtn.textContent = '⏸';
});

update_name()