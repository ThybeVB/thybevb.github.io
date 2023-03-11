const setup = () => {


        let error = false;

        let btnValideer = document.getElementById("btnValideer");
        btnValideer.addEventListener("click", () => {
        let txtVoornaam = document.getElementById("txtVoornaam");
        let errVoornaam = document.getElementById("errVoornaam");

        let voornaam = txtVoornaam.value.trim();
        if (voornaam.length > 30) {
            txtVoornaam.className = "invalid";
            errVoornaam.innerText = "max. 30 karakters";
            error = true;
        } else {
            txtVoornaam.className = "";
            errVoornaam.innerHTML = "";
        }

        let txtNaam = document.getElementById("txtNaam");
        let errNaam = document.getElementById("errNaam");
        let naam = txtNaam.value.trim();
        if (naam.length > 50) {
            txtNaam.className = "invalid";
            errNaam.innerText = "max. 50 karakters";
            error = true;
        } else {
            txtNaam.className = "";
            errNaam.innerHTML = "";
        }

        let dateBirth = document.getElementById("dateBirth");
        let errDoB = document.getElementById("errDoB");
        if (dateBirth.value === "") {
            dateBirth.className = "invalid";
            errDoB.innerText = "Verplicht veld";
            error = true;
        } else {
            dateBirth.className = "";
            errDoB.innerText = "";
        }

        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        let txtEmail = document.getElementById("txtEmail");
        let errEmail = document.getElementById("errEmail");
        if (txtEmail.value === "") {
            txtEmail.className = "invalid";
            errEmail.innerText = "geen geldig email adres";
            error = true;
        } else if (!emailRegex.test(txtEmail.value)) {
            txtEmail.className = "invalid";
            errEmail.innerText = "geen geldig email adres";
            error = true;
        } else {
            txtEmail.className = "";
            errEmail.innerText = "";
        }

        let txtKinderen = document.getElementById("txtKinderen");
        let errKinderen = document.getElementById("errKinderen");
        let hoeveelKinderen = Number(txtKinderen.value);
        if (hoeveelKinderen < 0 || isNaN(hoeveelKinderen)) {
            txtKinderen.className = "invalid";
            errKinderen.innerText = "is geen positief getal";
            error = true;
        } else if (hoeveelKinderen > 99) {
            txtKinderen.className = "invalid";
            errKinderen.innerText = "is te vruchtbaar";
            error = true;
        }

        if (!error) {
            alert("proficiat!")
        }

    });
};

window.addEventListener("load", setup);
