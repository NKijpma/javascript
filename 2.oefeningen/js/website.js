document.querySelector('#box1').style.backgroundColor = "green";
document.querySelector('#box1').style.borderRadius = "20%";
document.querySelector('#box2').style.backgroundColor = "red";
document.querySelector('#box2').style.borderRadius = "10%";

window.addEventListener('load', function () {
    console.log("wat doe je in console lil vro !")
});

document.querySelector('#box1').addEventListener('click', function () {

    document.querySelector('#box2').innerHTML = '<h2> Hello World !</h2>';
});

// on box 2 click change color bpx1
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
// on laila box click change content box1 to let cat
document.querySelector('#laila').addEventListener('click', function () {
    document.querySelector('#box1').innerHTML = `
        <p>
            Naam: ${cat.naam}<br>
            Leeftijd: ${cat.leeftijd}<br>
            Hobbys: ${cat.hobbys.join(', ')}
        </p>
    `;
});


// box that gets a random cat image from a api
let catBox = document.querySelector('#cat_box');
catBox.addEventListener('click', async function () {

    try {
        let response = await fetch("https://api.thecatapi.com/v1/images/search", {
            method: 'GET',
            headers: {
                "x-api-key": "live_eEhHHZcMeM8daSSoZGwsjTz5T932kdgLiValkNsALlwdL475xuTLjlSpTzormKTR"
            }
        });


        let data = await response.json();
        let img = document.createElement("img");
        img.src = data[0].url;

        catBox.innerHTML = "";
        catBox.appendChild(img);
    } catch (error) {
        console.log(error);
        document.querySelector('#cat_box').innerHTML =  'image not found,' +
            '(waarschijnlijk premium image klik opnieuw)';
    }
});
