const setup = () => {
    let list = document.querySelector("#myDIV");

    let p = document.createElement("p");
    let txtNode = document.createTextNode("teksttttttt");
    p.appendChild(txtNode);

    list.appendChild(p);
};

window.addEventListener("load", setup);
