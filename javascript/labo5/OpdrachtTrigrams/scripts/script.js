const setup = () => {
    let str = "onoorbaar";

    let groups = [];
    for (let i = 0; i < str.length - 2; i++) {
        groups.push(str.slice(i, i + 3));
    }

    console.log(groups);
};

window.addEventListener("load", setup);
