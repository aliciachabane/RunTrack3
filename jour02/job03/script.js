let count = 0;

function addone() {
    count++;
    document.getElementById("compteur").textContent = count;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", addone);
});