function calculatevalue(op) {
    var x = parseInt(document.getElementById("fnum").value);
    var y = parseInt(document.getElementById("snum").value);

    if (op == "+") {

        document.getElementById("answers").innerHTML=x+y;
    }
    else if (op == "-") {

        document.getElementById("answers").innerHTML=x-y;
    }
    else if (op == "*") {

        document.getElementById("answers").innerHTML=x*y;
    }
    else if (op == "/") {

        document.getElementById("answers").innerHTML=x/y;
    }
    else if (op == "%") {

        document.getElementById("answers").innerHTML=(x/100)*y;
    }
}