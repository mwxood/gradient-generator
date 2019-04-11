var css = document.querySelector(".gradient-style"),
    color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    body = document.getElementById("gradient"),
    randomColorButton = document.querySelector(".random-color");

function setGradient() {
    body.style.background =
        "linear-gradient(to right," +  color1.value + "," + color2.value +")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

css.textContent = body.style.background + ";";

randomColorButton.addEventListener("click", function() {
    body.style.background =
        "linear-gradient(to right," +  randomColor() + "," + randomColor() +")";
});

function randomColor() {
    return "#" + Math.random().toString(16).slice(2,8).toLocaleUpperCase();
}

randomColor();

