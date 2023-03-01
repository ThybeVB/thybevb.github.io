const setup = () => {
    let txtInput = document.getElementById("txtInput");
    let eerstenum = document.getElementById("eerstenum");
    let tweedenum = document.getElementById("tweedenum");

    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", function () {
        substringFunctie(txtInput.value, eerstenum.value, tweedenum.value);
    });
};

const substringFunctie = (txtInput, eerstenum, tweedenum) => {
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = txtInput.substring(eerstenum, tweedenum);
};

window.addEventListener("load", setup);
