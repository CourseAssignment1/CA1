var calcStr = "";

document.getElementById("calculate").onclick = calcResult;

document.getElementById("buttons").onclick = getKey;

function getKey(e) {
  var text = e.target.innerText;
  calcStr += text;
  document.getElementById("display").innerHTML = calcStr;
};

function calcResult(e) {
   e.stopPropagation();
   var result = 0;
   if (calcStr.includes("+")) {
     var numbers = calcStr.split("+");
     firstNumber = Number(numbers[0]);
     secondNumber = Number(numbers[1]);
     result = firstNumber + secondNumber;
     calcStr = "";
    } 
   if (calcStr.includes("-")) {
     var numbers = calcStr.split("-");
     firstNumber = Number(numbers[0]);
     secondNumber = Number(numbers[1]);
     result = firstNumber - secondNumber;
     calcStr = "";
    }
    if (calcStr.includes("*")) {
     var numbers = calcStr.split("*");
     firstNumber = Number(numbers[0]);
     secondNumber = Number(numbers[1]);
     result = firstNumber * secondNumber;
     calcStr = "";
    } 
    if (calcStr.includes("/")) {
     var numbers = calcStr.split("/");
     firstNumber = Number(numbers[0]);
     secondNumber = Number(numbers[1]);
     result = firstNumber / secondNumber;
     calcStr = "";
    } 
     
   document.getElementById("display").innerHTML = result;

   
}



