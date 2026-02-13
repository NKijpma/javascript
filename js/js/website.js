document.querySelector('#box1').style.backgroundColor = "green";
document.querySelector('#box1').style.borderRadius = "100%";
document.querySelector('#box2').style.backgroundColor = "red";
document.querySelector('#box2').style.borderRadius = "10%";

window.addEventListener('load', function () {
    console.log("wat doe je in console lil vro !")
});

document.querySelector('#box1').addEventListener('click', function(){

    document.querySelector('#box2').innerHTML = '<h1> Hello World !</h1>';
});

document.querySelector('#box2').addEventListener('click', function(){
    document.querySelector('#box1').style.backgroundColor = "darkblue";
});



// document.querySelector('#search_form').addEventListener('submit', function() {
//     console.log("Laten we dan nu het hele formulier naar PHP sturen.");
// })