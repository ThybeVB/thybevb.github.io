const setup = () => {
    //let str = "Gisteren zat de jongen op de stoep en at de helft van de appel".replace(/de/g, "het"); mag niet :(
    //console.log(str);

    let str = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let woorden = str.split(" ");
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i] === "de") {
            woorden[i] = "het";
        }
    }
    console.log(woorden.join(" "));
};

window.addEventListener("load", setup);
