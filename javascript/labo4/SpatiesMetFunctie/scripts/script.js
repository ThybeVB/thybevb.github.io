const setup = () => {
    let input = document.getElementById("input");
    let btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", () => {
        console.log(maakMetSpaties(input.value));
    });
};

const maakMetSpaties = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += input.charAt(i);
        result += " ";
    }

    return result;
};

window.addEventListener("load", setup);
