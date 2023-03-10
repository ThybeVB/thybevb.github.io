const setup = () => {
    let imgVives = document.getElementsByTagName("img")[0];
    let txtVives = document.getElementsByTagName("p")[0];

    imgVives.addEventListener("mouseover", () => {
        imgVives.src = "./img/kat.jpg";
        imgVives.alt = "Kat";
        txtVives.innerText = "Kat";
    });

    imgVives.addEventListener("mouseleave", () => {
        imgVives.src = "./img/vives.png";
        imgVives.alt = "Vives";
        txtVives.innerText = "Hogeschool Vives";
    });
};

window.addEventListener("load", setup);
