const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
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

window.addEventListener("load", setup);
