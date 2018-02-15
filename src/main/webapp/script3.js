var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//document.getElementById("boys").setInnerText = boys.join();


function printPersonsBoy(arr) {
    var str = "<table>";
    arr.forEach(function (name) {
        str += "<tr><td>" + name + "</td></tr>";
    })
    str += "</table>";
    document.getElementById("boys").innerHTML = str;
}
function printPersonsGirl(arr) {
    var str = "<table>";
    arr.forEach(function (name) {
        str += "<tr><td>" + name + "</td></tr>";
    })
    str += "</table>";
    document.getElementById("girls").innerHTML = str;
}
function printPersonsAll(array) {

    var str = "<table>";
    array.forEach(function (name) {
        str += "<tr><td>" + name + "</td></tr>";
    })
    str += "</table>";
    document.getElementById("all").innerHTML = str;
}
function createAllList() {
    var arr = boys.concat(girls);
    return arr;
}


function AddBoy() {
    var name = document.getElementById("newboy").value;
    boys.push(name)
    printPersonsBoy(boys);
    printPersonsAll(createAllList());
    document.getElementById("newboy").value = "";
}
function AddGirl() {
    var name = document.getElementById("newgirl").value;
    girls.push(name)
    printPersonsGirl(girls);
    printPersonsAll(createAllList());
    document.getElementById("newgirl").value = "";
}
function RemoveFromTopGirl() {
    if (document.getElementById("first").checked == true) {
        girls.shift();
        printPersonsGirl(girls);
        printPersonsAll();
    } else if (document.getElementById("last").checked == true) {
        girls.pop();
        printPersonsGirl(girls);
        printPersonsAll(createAllList());
    }
}
function RemoveFromTopBoy() {
    if (document.getElementById("first").checked == true) {
        boys.shift();
        printPersonsBoy(boys);
        printPersonsAll();
    } else if (document.getElementById("last").checked == true) {
        boys.pop();
        printPersonsBoy(boys);
        printPersonsAll(createAllList());
    }
}
function ReverseNames() {
    var arr = boys.concat(girls);
    arr.reverse();
    printPersonsAll(arr);
}

function SortNamesDSC() {
    var arr = boys.concat(girls);
    var array = arr.sort(function (a, b) {
        return b.localeCompare(a);
    })
    printPersonsAll(array);   
}

function SortNamesASC() {
    var arr = boys.concat(girls);
    var array = arr.sort(function (a, b) {
        return a.localeCompare(b);
    })
    printPersonsAll(array);
}

var pressed = true;

function whatToDo(){
    if (pressed === true){
        SortNamesASC();
        pressed = false;
        return;
    }
    if (pressed === false){
        SortNamesDSC();
        pressed = true;
        return;
    }
}


printPersonsBoy(boys);
printPersonsGirl(girls);
printPersonsAll(createAllList());
document.getElementById("addboy").onclick = AddBoy;
document.getElementById("addgirl").onclick = AddGirl;
document.getElementById("removeboy").onclick = RemoveFromTopBoy;
document.getElementById("removegirl").onclick = RemoveFromTopGirl;
document.getElementById("reverse").onclick = ReverseNames;
document.getElementById("sort").onclick = whatToDo;

