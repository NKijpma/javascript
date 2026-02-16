document.querySelector('#box1').style.backgroundColor = "green";
document.querySelector('#box1').style.borderRadius = "100%";
document.querySelector('#box2').style.backgroundColor = "red";
document.querySelector('#box2').style.borderRadius = "10%";

window.addEventListener('load', function () {
    console.log("wat doe je in console lil vro !")
});

document.querySelector('#box1').addEventListener('click', function () {

    document.querySelector('#box2').innerHTML = '<h1> Hello World !</h1>';
});

document.querySelector('#box2').addEventListener('click', function () {
    document.querySelector('#box1').style.backgroundColor = "darkblue";
});

let cat = {
    "naam": "laila ",
    "leeftijd": "idk 1 denk ",
    "hobbys": [
        "slapen ",
        "eten ",
        "meowen "
    ]
};

document.querySelector('#laila').addEventListener('click', function () {
    document.querySelector('#box1').innerHTML = `
        <p>
            Naam: ${cat.naam}<br>
            Leeftijd: ${cat.leeftijd}<br>
            Hobbys: ${cat.hobbys.join(', ')}
        </p>
    `;
});


// Als je op box1 klikt, haal je een afbeelding van een API (zoals in het bovenstaande voorbeeld), en zet je die
// afbeelding in box2.

fetch(json/catimages.json){


}

document.querySelector('#cat_box').addEventListener('click', function () {




})
