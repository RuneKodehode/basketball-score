let score1 = 0
let score2 = 0
let mål1 = document.getElementById("homescore")
let mål2 = document.getElementById("awayscore")
function ettMålH() {
score1++
mål1.textContent = score1;
}
function ettMålB() {
    score2++
    mål2.textContent = score2;
}
function toMålH() {
    score1 += +2
    mål1.textContent = score1;
}
function toMålB() {
    score2 += 2;
    mål2.textContent = score2;
}
function treMålH() {
    score1 += +3
    mål1.textContent = score1;
}
function treMålB() {
    score2 += 3;
    mål2.textContent = score2;
}
function fjern() {
 score1 = 0;
 score2 = 0;
 mål1.textContent = score1;
 mål2.textContent = score2;
}