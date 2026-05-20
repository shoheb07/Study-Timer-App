let time = 25 * 60;

let timerInterval;

function updateDisplay(){

    let minutes =
        Math.floor(time / 60);

    let seconds =
        time % 60;

    minutes =
        minutes < 10 ? "0" + minutes : minutes;

    seconds =
        seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer")
        .innerText =
        `${minutes}:${seconds}`;
}

function startTimer(){

    clearInterval(timerInterval);

    timerInterval = setInterval(function(){

        if(time > 0){

            time--;

            updateDisplay();

        } else {

            clearInterval(timerInterval);

            alert("Study Session Completed!");
        }

    }, 1000);
}

function pauseTimer(){

    clearInterval(timerInterval);
}

function resetTimer(){

    clearInterval(timerInterval);

    time = 25 * 60;

    updateDisplay();
}

updateDisplay();
