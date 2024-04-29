
function mainfunction() {


    const buttons = document.querySelectorAll("#btn");
// getting all buttons
    buttons.forEach(function (button) {
//firing addeventlistener for every button
        button.addEventListener("click", function () {
//checking value to perform operation
            if (button.value == "=") {

                final();
            }
           
            else if (button.value == "times") {
                bkspc();
            }
           //if not numbers but operators then they will display or work if numbers exist on display
            else if (button.value == "*" || button.value == "/" || button.value == "." || button.value == "+" || button.value == "-") {
                let backres = document.querySelector("#result").value;
                let backvalue = backres.slice(backres.length-1, backres.length);

              //if not number then checking if last value on display is also not operator
                if (document.querySelector("#result").value != "") {
                    //if not then only it will work and display
                    if (backvalue != "*"&& backvalue != "/"&& backvalue != "." && backvalue != "+" && backvalue != "-") {
                        getValues(button.value);
                    }
                }
            }
            //if numbers then they will display 
            else {
                getValues(button.value);
            }
        });
    });
//functions to perform diffrent task
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
