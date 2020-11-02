const ghontarhat = document.querySelector("#hour");
const minerhat = document.querySelector("#minute");
const secerhat = document.querySelector("#second");

var date = new Date();
    console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + "Second: " + sec);

    let hrposition = (hr*360/12) + (min*(360/60)/12);
    let minposition = (min*360/60) + (sec*(360/60)/60);
    let secposition = sec*360/60;

function runtheclock(){

    hrposition = hrposition+(3/360);
    minposition = minposition+(6/60);
    secposition = secposition+6;

    ghontarhat.style.transform = "rotate(" + hrposition + "deg)";
    minerhat.style.transform = "rotate(" + minposition + "deg)";
    secerhat.style.transform = "rotate(" + secposition + "deg)";
}

var interval = setInterval(runtheclock, 1000);
