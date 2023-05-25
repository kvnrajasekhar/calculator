function clrsc() {
    document.getElementById("answer").value = " ";
}
function erase() {
    var size = document.getElementById("answer").value.length;
    document.getElementById("answer").value = document.getElementById("answer").value.slice(0, size - 1);
}
function display(value) {

    document.getElementById("answer").value += value;
}
function calculate() {
    var ans = eval(document.getElementById("answer").value);
    document.getElementById("answer").value = ans;

}
document.addEventListener("click", function (event) {
    if ((event.key >= '0' && event.key <= '9') || (event.key === '+') || event.key === '-' || event.key === '*' || event.key === "/" || event.key === ".") {
       document.querySelector("button").addClass("hover");

    }
});
document.addEventListener("keypress", function (event) {
    if ((event.key >= '0' && event.key <= '9') || (event.key === '+') || event.key === '-' || event.key === '*' || event.key === "/" || event.key === ".") {
        display(event.key);
    }
    else if (event.key === "Enter" || event.key === "=") {
        if (event.key === "Enter")
            event.preventDefault();
        calculate();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 8) {
        erase();
    }
    if (event.keyCode === 46 || event.keyCode === 27) {
        clrsc();
    }
});