document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("color-options").classList.toggle("hidden");
});

const shell = document.getElementById("shell");
const colors = ["blue-shell", "green-shell", "pink-shell"];


document.getElementById("blue").addEventListener("click", () => {
    shell.classList.remove(...colors);
    shell.classList.add("blue-shell");
});

document.getElementById("green").addEventListener("click", () => {
    shell.classList.remove(...colors);
    shell.classList.add("green-shell");
});

document.getElementById("pink").addEventListener("click", () => {
    shell.classList.remove(...colors);
    shell.classList.add("pink-shell");
});