var calcStr = "";

document.getElementById("calculate").onclick = calcResult;

document.getElementById("buttons").onclick = getKey;

document.getElementById("home").onclick = function () {
    window.location.href = 'index.html';
};

function getKey(e) {
    var text = e.target.innerText;
    calcStr += text;
    document.getElementById("display").innerHTML = calcStr;
}
;

function calcResult(e) {
    e.stopPropagation();
    var result = 0;
    var cb;
    if (calcStr.includes("+")) {
        var numbers = calcStr.split("+");
        cb = add;
    }
    if (calcStr.includes("-")) {
        var numbers = calcStr.split("-");
        cb = sub;
    }
    if (calcStr.includes("*")) {
        var numbers = calcStr.split("*");
        cb = mul;
    }
    if (calcStr.includes("/")) {
        var numbers = calcStr.split("/");
        cb = div;
    }
    document.getElementById("display").innerHTML = doCalc(numbers, cb);;
}

function doCalc(numbers, callback) {
    firstNumber = Number(numbers[0]);
    secondNumber = Number(numbers[1]);
    calcStr = "";
    return callback(firstNumber, secondNumber);
}

function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function mul(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n1 / n2;
}

