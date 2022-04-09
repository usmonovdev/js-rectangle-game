// Element
let element = document.getElementById("rectangle");
let steps = 50;

// Buttons
let upBtn = document.getElementById("up")
let downBtn = document.getElementById("down")
let leftBtn = document.getElementById("left")
let rightBtn = document.getElementById("right")

window.addEventListener('load', () => {
    element.style.position = 'relative';
    element.style.left = 0;
    element.style.top = 0;
});

window.addEventListener("keyup", (d) => {
    switch (d.code) {
        case "KeyA":
        case "ArrowLeft": element.style.left = parseInt(element.style.left) - steps + "px"; 
        break;

        case "KeyD":
        case "ArrowRight": element.style.left = parseInt(element.style.left) + steps + "px"; 
        break;

        case "KeyW":
        case "ArrowUp": element.style.top = parseInt(element.style.top) - steps + "px";
        break;

        case "KeyS":
        case "ArrowDown": element.style.top = parseInt(element.style.top) + steps + "px"; 
        break;
    }
});

function upFunc() {
    element.style.top = parseInt(element.style.top) - steps + "px";
}

function downFunc() {
    element.style.top = parseInt(element.style.top) + steps + "px";
}

function leftFunc() {
    element.style.left = parseInt(element.style.left) - steps + "px";
}

function rightFunc() {
    element.style.left = parseInt(element.style.left) + steps + "px";
}