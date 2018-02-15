const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
//const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const newButton = document.querySelector("#new");
const theTimer = document.querySelector(".timer");

var randomText = [
    "A man asks a farmer near a field, 'Sorry sir, would you mind if I crossed your field instead of going around it? You see, I have to catch the 4:23 train.' The farmer says, 'Sure, go right ahead. And if my bull sees you, you will even catch the 4:11 one.'",
    "Mother: 'How was school today, Patrick?' Patrick: 'It was really great mum! Today we made explosives!' Mother: 'Ooh, they do very fancy stuff with you these days. And what will you do at school tomorrow?' Patrick: 'What school?'",
    "Man to his priest: 'Yesterday I sinned with an 18 year old girl.' The priest: 'Squeeze 18 lemons and drink the juice all at once.' Man: 'And that frees me from my sin?' Priest: 'No, but it frees your face from that dirty grin.'"

];

var randomNumber = Math.floor((Math.random() * randomText.length));
var originText = randomText[randomNumber];
document.querySelector("#origin-text p").innerHTML = originText;

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Reset everything:
function newText() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";

    var randomNumber = Math.floor((Math.random() * randomText.length));
    var originText = randomText[randomNumber];
    document.querySelector("#origin-text p").innerHTML = originText;
}


// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
newButton.addEventListener("click", newText, false);
