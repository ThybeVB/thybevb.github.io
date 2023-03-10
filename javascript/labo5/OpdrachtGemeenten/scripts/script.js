const setup = () => {
    let finished = false;
    let array = [];
    while (!finished) {
        let input = prompt("Voer een gemeente in");
        if (input !== null) {
            if (input === "quit") {
                finished = true;
            } else {
                array.push(input);
            }
        }
    }

    let sortedArray = array.sort(compare);
    let gemeentelijst = document.getElementById("gemeentelijst");
    for (let i = 0; i < sortedArray.length; i++) {
        let item = document.createElement("option");
        item.text = sortedArray[i];
        item.value = sortedArray[i];
        gemeentelijst.add(item);
    }
};

const compare = (a, b) => {
    return a.localeCompare(b);
};

window.addEventListener("load", setup);
