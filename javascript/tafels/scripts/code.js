let arrTables = [];

const setup = () => {
    loadTables();

    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", btnClick);
};

const btnClick = () => {
    let txtStart = document.getElementById("txtStart");
    let startVal = parseInt(txtStart.value);

    if (isNaN(startVal)) {
        alert("Geen geldig getal");
    } else {
        if (startVal > 11) {
            alert("Getal te groot");
        } else {
            let tafel = {
                start: startVal,
                datum: new Date(),
            };
            generateTable(tafel);
            arrTables.push(tafel);
            storeTables();
        }
    }

    txtStart.value = "";
};

const generateTable = (tafel) => {
    let table = createElementWithClassName("div", "tafel");
    document.getElementById("tableBox").appendChild(table);

    let header = createElementWithClassName("div", "header");
    table.appendChild(header);

    let testDate = new Date(tafel.datum);
    let seconden = testDate.getSeconds();
    let minuten = testDate.getMinutes();
    let uren = testDate.getHours();
    let headerRow = createElementWithText("tr", `Tafel van ${tafel.start} aangemaakt op ${uren}:${minuten}:${seconden}`);
    header.appendChild(headerRow);

    for (let i = 1; i <= 10; i++) {
        let row = null;
        let rowContent = null;
        if (i % 2 == 0) {
            row = createElementWithClassName("div", "even");
            rowContent = createElementWithClassNameAndText("div", "even", tafel.start + " x " + i + " = " + tafel.start * i);
        } else {
            row = document.createElement("div");
            rowContent = createElementWithText("div", tafel.start + " x " + i + " = " + tafel.start * i);
        }

        row.appendChild(rowContent);
        table.append(row);
    }
};

const storeTables = () => {
    let jsonArr = JSON.stringify(arrTables);
    localStorage.setItem("vives.be.tables.history", jsonArr);
};

const loadTables = () => {
    let historyJson = localStorage.getItem("vives.be.tables.history");
    if (historyJson != undefined) {
        arrHistory = JSON.parse(historyJson);
        arrHistory.forEach((obj) => {
            generateTable(obj);
        });
    }
};

const createElementWithText = (element, text) => {
    let e = document.createElement(element);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

window.addEventListener("load", setup);
