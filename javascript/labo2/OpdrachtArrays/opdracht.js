const VoegNaamToe = (familieleden) => {
    let input = prompt("geef een naam");
    familieleden.push(input);
    console.log(input);
};

const setup = () => {
    let familieleden = ["Naam", "Naam2", "Naam3", "Naam4", "Naam5"];

    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);
    VoegNaamToe(familieleden);
    console.log(familieleden.join(" - "));
};

window.addEventListener("load", setup);
