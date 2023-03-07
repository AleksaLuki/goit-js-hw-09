// const btnStart = document.querySelector('button[data-start]');
// const btnStop = document.querySelector('button[data-stop]');
// const body = document.querySelector('body');
// const CHANGE_COLOR_DELAY = 1000;

// btnStart.addEventListener('click', btnStartChangeColor);
// btnStop.addEventListener('click', btnStopChangeColor);


const CHANGE_COLOR_DELAY = 1000;
let idInt = null;

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}


refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', btnStartChangeColor);
refs.btnStop.addEventListener('click', btnStopChangeColor);


function btnStartChangeColor() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    idInt = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, CHANGE_COLOR_DELAY);
}

function btnStopChangeColor() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;

    clearInterval(idInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}