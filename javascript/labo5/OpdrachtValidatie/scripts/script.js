const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", () => {
        let txtVoornaam = document.getElementById("txtVoornaam");
        let errVoornaam = document.getElementById("errVoornaam");

        let voornaam = txtVoornaam.value.trim();
        if (voornaam.length > 30) {
            txtVoornaam.className = "invalid";
            errVoornaam.innerText = "max. 30 karakters";
        } else {
            txtVoornaam.className = "";
            errVoornaam.innerHTML = "";
        }
    });
};

window.addEventListener("load", setup);
