
function something() {
    return"inside the function";
}
function setTitle() {
    document.getElementById("header").innerHTML = something();
}