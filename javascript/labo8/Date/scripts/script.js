const setup = () => {
    let start = new Date();
    console.log(start);

    //dag v/d week (zondag = 0)
    console.log(start.getDay());

    //maand v/h jaar (januari = 0)
    console.log(start.getMonth() + 1);

    //jaar
    console.log(start.getFullYear());

    //dag
    console.log(start.getDate());

    let dag = start.getDate();
    let maand = start.getMonth() + 1;
    let jaar = start.getFullYear();
    let seconden = start.getSeconds();
    let minuten = start.getMinutes();
    let uren = start.getHours();
    console.log(`${dag}-${maand}-${jaar} ${uren}:${minuten}:${seconden}`);

    //datum afdrukken
    let event = new Date("2004-05-07T06:00:00");
    let ms = start - event;
    let oneday = 1000 * 60 * 60 * 24;
    let countDay = ms / oneday;
    console.log("aantal dagen: " + parseInt(countDay));

    console.log("toISOString " + event.toISOString());
    console.log("toDateString " + event.toDateStringtac());
    console.log("toTimeString " + event.toTimeString());
};

window.addEventListener("load", setup);
