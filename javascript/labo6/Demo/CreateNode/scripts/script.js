const setup = () => {
    let element = document.createElement("p");
    element.setAttribute("class", "color");
    let txtNode = document.createTextNode("Hello world");
    element.appendChild(txtNode);

    document.querySelector("#myDiv").appendChild(element);
};

window.addEventListener("load", setup);
