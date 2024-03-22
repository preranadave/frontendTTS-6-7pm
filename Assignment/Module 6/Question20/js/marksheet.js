function calculatevalue() {
    var total = parseInt(document.getElementById("css").value) +
        parseInt(document.getElementById("php").value) + parseInt(document.getElementById("c").value) +

        parseInt(document.getElementById("css").value) + parseInt(document.getElementById("java").value) +

        parseInt(document.getElementById("c++").value) + parseInt(document.getElementById("database").value);
    document.getElementById("total").innerHTML = total;
    var percentage =Math.round( (total / 350) * 100).toFixed(2);
    document.getElementById("perc").innerHTML = percentage;
}