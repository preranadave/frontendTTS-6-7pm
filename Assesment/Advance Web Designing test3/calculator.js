
function mainfunction() {


    const buttons = document.querySelectorAll("#btn");

    // loop through each button and add a click event listener
    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.value == "=") {

                final();
            }
           
            else if (button.value == "times") {
                bkspc();
            }
           
            else if (button.value == "*" || button.value == "/" || button.value == "." || button.value == "+" || button.value == "-") {
                let backres = document.querySelector("#result").value;
                let backvalue = backres.slice(backres.length-1, backres.length);

              
                if (document.querySelector("#result").value != "") {
                    if (backvalue != "*"&& backvalue != "/"&& backvalue != "." && backvalue != "+" && backvalue != "-") {
                        getValues(button.value);
                    }
                }
            }
            else {
                getValues(button.value);
            }
        });
    });

    function clr() {
        document.querySelector("#result").textContent = "";
    }
    function bkspc() {

        let backres = document.querySelector("#result").value;

        let result = backres.slice(0, -1);
        document.querySelector("#result").value = result;
    }
    function getValues(val) {
        document.querySelector("#result").value += val;
    }
    function final() {

        let x = document.querySelector("#result").value;
        let y = eval(x);
        document.querySelector("#result").value = y;
    }

}
window.onload = mainfunction;
