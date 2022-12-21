function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function getLetter(){
    readTextFile("./letra.json", function(text){
        var data = JSON.parse(text);
        document.querySelector(".letra").innerText = data.letra;
        console.log(data);
    });
}


const countdown = () => {
    const today = new Date();
    const countDownDate = new Date();
    countDownDate.setDate(today.getDate() + 1);
    countDownDate.setHours(0, 0, 0, 0);

    const now = today.getTime();

    const distance = countDownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".hour").innerText = hours;
    document.querySelector(".minute").innerText = minutes;
    document.querySelector(".second").innerText = seconds; 
}

setInterval(countdown, 1000);
getLetter();