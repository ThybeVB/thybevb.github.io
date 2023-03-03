const setup = () => {
    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseOut", mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"
    document.getElementById("btnContent").addEventListener("click", changeContent);
};

// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.vives.be'>VIVES</a>";
};

// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hover<br>";
};

// mouseClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "On click<br>";
};

// mouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse out<br>";
};

//changeCSS
const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].className = "listItemsStyleNone colorRed";

        //3e manier
        /*if (listItems[i].classList.contains("listItemsStyleDisc")) {
            listItems[i].classList.remove("listItemsStyleDisc");
            listItems[i].classList.remove("colorWhite");
        }*/
        /*listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output " + listItems[i].className);*/
    }
};

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].className = "listItemsStyleDisc colorWhite";

        //3e manier
        /*
        if (listItems[i].classList.contains("listItemsStyleNone")) {
            listItems[i].classList.remove("listItemsStyleNone");
            listItems[i].classList.remove("colorRed");
        }
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output " + listItems[i].className);*/
    }
};

window.addEventListener("load", setup);
