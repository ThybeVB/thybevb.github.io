let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    gameStarted: false,
};

const setup = () => {
    let foto = document.getElementById("foto");
    foto.style.width = global.IMAGE_SIZE;
    foto.style.height = global.IMAGE_SIZE;
    foto.addEventListener("click", click);

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", startGame);
};

const startGame = () => {
    gameStarted = true;
    gameInterval();
    global.timeoutId = setInterval(gameInterval, global.MOVE_DELAY);
};

const endGame = () => {
    clearInterval(global.timeoutId);
    alert("gedaan");
};

const gameInterval = () => {
    //alert("elke 3 seconden een alert");

    let foto = document.getElementById("foto");
    let randomNumber = Math.random() * global.IMAGE_COUNT;

    foto.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.floor(randomNumber) + global.IMAGE_PATH_SUFFIX);
    foto.setAttribute("type", String(Math.floor(randomNumber)));

    const playField = document.getElementById("playField");
    let xPos = Math.floor(Math.random() * (playField.clientWidth - foto.offsetWidth));
    let yPos = Math.floor(Math.random() * (playField.clientHeight - foto.offsetHeight));

    foto.style.left = `${xPos}px`;
    foto.style.top = `${yPos}px`;
};

const bomOfFood = () => {
    const foto = document.getElementById("foto");
    let hits = document.getElementById("hits");
    const type = foto.getAttribute("type");

    if (type == 0) {
        alert("boom");
        endGame();
    } else {
        global.score++;
        hits.innerText = global.score;
        gameInterval();
    }
};

const click = () => {
    if (!gameStarted) {
        alert("booom");
    } else {
        bomOfFood();
    }
};

window.addEventListener("load", setup);
