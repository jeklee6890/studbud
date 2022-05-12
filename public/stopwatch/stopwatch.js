const timeElement = document.querySelector('.watch .time');

const buttonStart = document.getElementsById('stopwatch-start');
const buttonStop = document.getElementsById('stopwatch-stop');
const buttonReset = document.getElementsById('stopwatch-reset');

let seconds = 3493;
let interval = null;


start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


function timer() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;
    
    if(secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    timeElement.innerText = `${hours}:${mins}:${secs}` ;
}



function startTimer() {
    if(interval) {
        return
    }
    interval = setInterval(timer, 1000);
}



function stopTimer() {
    clearInterval(interval);
    interval = null;
}


function resetTimer() {
    stop();
    seconds = 0;
    timeElement.innerText = "00:00:00";
}