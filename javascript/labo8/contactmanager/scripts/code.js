let personen = [];

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", showUserData);
};

const showUserData = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let user = personen[lstPersonen.selectedIndex];

    let voornaam = document.getElementById("txtVoornaam");
    voornaam.value = user.voornaam;

    let naam = document.getElementById("txtFamilienaam");
    naam.value = user.naam;

    let geboortedatum = document.getElementById("txtGeboorteDatum");
    geboortedatum.value = user.geboortedatum;

    let email = document.getElementById("txtEmail");
    email.value = user.email;

    let aantalKinderen = document.getElementById("txtAantalKinderen");
    aantalKinderen.value = user.aantalKinderen;
};

const bewaarBewerktePersoon = () => {
    valideer();

    let person = {
        voornaam: document.getElementById("txtVoornaam").value,
        naam: document.getElementById("txtFamilienaam").value,
        geboortedatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value,
    };

    let list = document.getElementById("lstPersonen");
    if (list.selectedIndex != -1) {
        personen[list.selectedIndex] = person;
        updateUI(true, person);
    } else {
        personen.push(person);
        updateUI(false, person);
    }
};

const bewerkNieuwePersoon = () => {
    let form = document.getElementsByTagName("form")[0];
    form.reset();
    clearAllErrors();
};

const updateUI = (exists, person) => {
    let list = document.getElementById("lstPersonen");
    let uName = person.voornaam + " " + person.naam;
    if (!exists) {
        let newOption = document.createElement("option");
        newOption.text = uName;
        newOption.value = uName;

        list.add(newOption);
    } else {
        let option = list.options[list.selectedIndex];
        option.value = uName;
        option.text = uName;
    }
};

window.addEventListener("load", setup);
