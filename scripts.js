
class Gradient {
    constructor(css) {
        this.css = document.querySelector(css);
    }

    getGradientValue(body) {
        return this.css.textContent = body.style.background + ";";
    }

    setGradient(body, color1, color2) {
        body.style.background =
        "linear-gradient(to right," +  color1.value + "," + color2.value +")";
        this.getGradientValue(body);
    }

    static getRandomColor() {
        return "#" + Math.random().toString(16).slice(2,8);
    }

    setRandomColor(body) {
        body.style.background =
            "linear-gradient(to right," +  Gradient.getRandomColor() + "," + Gradient.getRandomColor(); +")";
        this.getGradientValue(body);
    }
}

let color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    body = document.getElementById("gradient"),
    randomColorButton = document.querySelector(".random-color");

const setColor = new Gradient(".gradient-style");
setColor.getGradientValue(body);

color1.addEventListener("input", () => {
    setColor.setGradient(body, color1, color2);
});
color2.addEventListener("input", () => {
    setColor.setGradient(body, color1, color2);
});
randomColorButton.addEventListener("click", () => {
    setColor.setRandomColor(body);
});
