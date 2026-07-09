function convert() {

    let number = document.getElementById("number").value.trim();
    let fromBase = parseInt(document.getElementById("fromBase").value);

    if (number === "") {
        alert("Please enter a number!");
        return;
    }

    let decimal = parseInt(number, fromBase);

    if (isNaN(decimal)) {
        alert("Invalid number for the selected base!");
        return;
    }

    document.getElementById("binary").innerHTML = decimal.toString(2);
    document.getElementById("octal").innerHTML = decimal.toString(8);
    document.getElementById("decimal").innerHTML = decimal.toString(10);
    document.getElementById("hex").innerHTML = decimal.toString(16).toUpperCase();

}

function swapBases() {

    let from = document.getElementById("fromBase");
    let to = document.getElementById("toBase");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;

}

function clearAll() {

    document.getElementById("number").value = "";

    document.getElementById("binary").innerHTML = "---";
    document.getElementById("octal").innerHTML = "---";
    document.getElementById("decimal").innerHTML = "---";
    document.getElementById("hex").innerHTML = "---";

}

function copyResult() {

    let text =
        "Binary: " + document.getElementById("binary").innerText + "\n" +
        "Octal: " + document.getElementById("octal").innerText + "\n" +
        "Decimal: " + document.getElementById("decimal").innerText + "\n" +
        "Hexadecimal: " + document.getElementById("hex").innerText;

    navigator.clipboard.writeText(text);

    alert("Result copied successfully!");

}