const setup = () => {
    let origineleString = "De man van An geeft geen hand aan ambetante verwanten";

    let i = 0;
    let count = 0;

    //Eerste manier indexOf
    while (i !== -1) {
        i = origineleString.toLowerCase().indexOf("an", i);
        if (i !== -1) {
            count++;
            i += 2; //an is twee letters
        }
    }

    console.log(count);

    //Tweede manier lastIndexOf
    count = 0;
    i = origineleString.toLowerCase().lastIndexOf("an");

    while (i !== -1) {
        count++;
        i = origineleString.toLowerCase().lastIndexOf("an", i - 1);
    }

    console.log(count);
};

window.addEventListener("load", setup);
