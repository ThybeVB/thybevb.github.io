const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let btnWijzig = document.getElementById("btnWijzig");

    pElement.innerHTML = "Welkom!";

    btnWijzig.addEventListener("click", () => {
        klik(pElement);
    });
};

const klik = (pElement) => {
    pElement.innerHTML = "veranderd";
};

window.addEventListener("load", setup);
