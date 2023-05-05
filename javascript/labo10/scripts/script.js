let arrHistory = [];

const setup = () => {
    loadHistory();

    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", clickBtnGo);
};

const clickBtnGo = () => {
    let input = document.getElementById("commandoInput");
    let matches = input.value.match("^/[tygi]{1} .*");
    if (matches != null) {
        let type = matches[0].charAt(1);
        let query = matches[0].substring(3);
        let link = getLink(type, query);

        let historyObject = {
            type: type,
            query: query,
            url: link,
        };

        window.open(link, "_blank");
        input.value = "";
        createCard(type, query, link);
        arrHistory.push(historyObject);
        storeHistory();
    } else {
        alert("Query niet juist");
    }
};

const storeHistory = () => {
    let jsonArr = JSON.stringify(arrHistory);
    localStorage.setItem("vives.be.history", jsonArr);
};

const loadHistory = () => {
    let historyJson = localStorage.getItem("vives.be.history");
    if (historyJson !== undefined) {
        arrHistory = JSON.parse(historyJson);
        arrHistory.forEach((obj) => {
            createCard(obj.type, obj.query, obj.url);
        });
    }
};

const createCard = (type, query, link) => {
    let row = document.getElementsByClassName("row")[0];

    let col = createElementWithClassName("div", "col-4");
    row.appendChild(col);

    let card = createElementWithClassName("div", `card ${getSocialmediaNameLower(type)}-card`);
    col.appendChild(card);

    let cardBody = createElementWithClassName("div", "card-body");
    card.appendChild(cardBody);

    let title = createElementWithClassNameAndText("h5", "card-title", getSocialmediaName(type));
    cardBody.appendChild(title);

    let content = createElementWithClassNameAndText("p", "card-text", query);
    cardBody.appendChild(content);

    let btn = createButton(link, type);
    cardBody.appendChild(btn);
};

const getLink = (type, query) => {
    let link = "";
    switch (type) {
        case "y":
            link = "https://youtube.com/results?search_query=" + query;
            break;
        case "t":
            link = "https://twitter.com/hashtag/" + query;
            break;
        case "g":
            link = "https://www.google.com/search?q=" + query;
            break;
        case "i":
            link = "https://www.instagram.com/explore/tags/" + query;
            break;
        default:
            break;
    }
    return link;
};

const getSocialmediaName = (type) => {
    let name = "";
    switch (type) {
        case "y":
            name = "YouTube";
            break;
        case "t":
            name = "Twitter";
            break;
        case "g":
            name = "Google";
            break;
        case "i":
            name = "Instagram";
            break;
        default:
            break;
    }
    return name;
};

const getSocialmediaNameLower = (type) => {
    return getSocialmediaName(type).toLowerCase();
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createButton = (link, type) => {
    let e = document.createElement("a");
    e.setAttribute("class", `btn btn-primary ${getSocialmediaNameLower(type)}-button`);
    e.setAttribute("href", link);
    e.setAttribute("target", "_blank");
    e.appendChild(document.createTextNode("Go!"));
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

window.addEventListener("load", setup);
