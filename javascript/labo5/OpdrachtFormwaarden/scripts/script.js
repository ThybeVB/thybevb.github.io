const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", submit);
};

const submit = () => {
    let isRoker = document.getElementById("isRoker");
    if (isRoker.checked) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    let moedertaal = document.getElementsByName("moedertaal");
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log("moedertaal is " + moedertaal[i].id);
        }
    }

    let favoBuurland = document.getElementById("buurland");
    let opties = favoBuurland.options;
    let geselecteerdeOptie = opties[opties.selectedIndex];
    console.log("Favoriete buurland is " + geselecteerdeOptie.value);

    let bestelling = document.getElementById("bestelling");
    let bestellingOpties = bestelling.options;
    let bestellingen = [];
    for (let i = 0; i < bestellingOpties.length; i++) {
        if (bestellingOpties[i].selected) {
            bestellingen.push(bestellingOpties[i].value);
        }
    }

    console.log("Bestelling bestaat uit " + bestellingen.join(" "));
};

window.addEventListener("load", setup);
