const setup = () => {
    let ps = document.querySelectorAll("p");
    let y = ps.childNodes[0];
    ps.removeChild(y);
    let txtNode = document.createTextNode("good job");
    ps.appendChild(txtNode);
};

window.addEventListener("load", setup);
