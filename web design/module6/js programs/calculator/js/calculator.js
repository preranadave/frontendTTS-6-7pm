
function clr() {
    document.getElementById("result").value = "";
}
function bkspc() {
    let backres = document.getElementById("result").value;

    let result = backres.slice(0, -1);
    document.getElementById("result").value = result;
}
function getValues(val) {
    document.getElementById("result").value += val;
}
function final() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}
function sqr() {
    var x=document.getElementById("result").value;
    document.getElementById("result").value=Math.pow(x, 2);
    

}
function sqrrt() { 
    var x=document.getElementById("result").value;
    document.getElementById("result").value=Math.sqrt(x, 2);

}