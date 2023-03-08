const setup = () => {
    let input = document.getElementById("input");
    let btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", () => {
        processInput(input.value);
    });
};

const processInput = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += input.charAt(i);
        result += " ";
    }

    console.log(result);
    //document.getElementById("txtOutput").innerText = result;
};

window.addEventListener("load", setup);
