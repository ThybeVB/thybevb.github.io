const setup = () => {
    let inputs = document.getElementsByClassName("inputAantal");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", update);
        inputs[i].addEventListener("input", update);
    }
};

const update = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let inputs = document.getElementsByClassName("inputAantal");
    let btw = document.getElementsByClassName("btw");

    updateSubtotals(prijzen, inputs, btw);
};

const updateSubtotals = (prijzen, aantallen, btws) => {
    let subtotalen = document.getElementsByClassName("subtotaal");
    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].innerHTML);
        let aantal = parseFloat(aantallen[i].value);
        let btw = parseFloat(btws[i].innerHTML);

        let subtotaal = prijs * aantal * (btw / 100 + 1);
        subtotalen[i].innerHTML = subtotaal.toFixed(2).replace(".", ",") + " Euro";
    }
    updateTotal(subtotalen);
};

const updateTotal = (subtotalen) => {
    let totaal = document.getElementById("totaal");
    let totaalNum = 0;
    for (let i = 0; i < subtotalen.length; i++) {
        totaalNum += parseFloat(subtotalen[i].innerHTML);
    }

    totaal.innerHTML = totaalNum.toFixed(2).replace(".", ",") + " Euro";
};

window.addEventListener("load", setup);
