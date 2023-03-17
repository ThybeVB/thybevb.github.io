const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let btnSave = document.getElementById("btnSave");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    btnSave.addEventListener("click", () => {
        let value = sliders[0].value;
        let value2 = sliders[1].value;
        let value3 = sliders[2].value;
        saveCanvas(value, value2, value3);
    });
};

const saveCanvas = (r, g, b) => {
    let newcanv = document.createElement("div");
    newcanv.classList.add("swatch");
    newcanv.style.background = `rgb(${r}, ${g}, ${b})`;

    // Button
    let closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(newcanv);
    });

    // Klik op kleur
    newcanv.addEventListener("click", (e) => {
        if (e.currentTarget == e.target) {
            updateKleuren(r, g, b);
            updateText(r, g, b);
            updateSliders(r, g, b);
        }
    });

    newcanv.appendChild(closeButton);
    document.body.appendChild(newcanv);
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let value = sliders[0].value;
    let value2 = sliders[1].value;
    let value3 = sliders[2].value;

    updateText(value, value2, value3);
    updateKleuren(value, value2, value3);
};

const updateText = (colorOne, colorTwo, colorThree) => {
    let txtEersteKleur = document.getElementById("txtEersteKleur");
    let txtTweedeKleur = document.getElementById("txtTweedeKleur");
    let txtDerdeKleur = document.getElementById("txtDerdeKleur");

    txtEersteKleur.textContent = colorOne;
    txtTweedeKleur.textContent = colorTwo;
    txtDerdeKleur.textContent = colorThree;
};

const updateKleuren = (colorOne, colorTwo, colorThree) => {
    let canvas = document.getElementById("colorDemo");
    canvas.style.background = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
};

const updateSliders = (r, g, b) => {
    let sliders = document.getElementsByClassName("slider");
    sliders[0].value = r;
    sliders[1].value = g;
    sliders[2].value = b;
};

window.addEventListener("load", setup);
