const setup = () => {
    //window.alert("Dit is een mededeling");
    //window.confirm("Weet u het zeker?");
    //window.prompt("Wat is uw naam", "onbekend");

    const zeker = window.confirm("Weet u het zeker?");
    console.log(zeker);

    const prompt = window.prompt("Wat is uw naam");
    console.log(prompt);
};

window.addEventListener("load", setup);
