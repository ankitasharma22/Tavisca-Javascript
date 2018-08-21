var para = "";
function digit(input) {
    var initialInput = document.getElementById("input-box").value;
    if(input.value == '=')
    { 
        calculationResult(initialInput);
        return; 
    }
    var numberString = initialInput + input.value;
    document.getElementById("input-box").value = numberString;
    
  }

function calculationResult(initialInput) {
    debugger;
    try
    {
        var result = eval(initialInput);
        maintainHistory(initialInput+"="+result);
        if(result == 'undefined')
        {
            document.getElementById("result-box").value = "Please enter valid input";
            return;
        }
    document.getElementById("result-box").value = result;
    document.getElementById("input-box").value = "";
    }
    catch(invalidException)
    {
        document.getElementById("result-box").value = "Please enter valid input";
    }
}

function keyPress(keyevent)
{
    var initialInput = document.getElementById("input-box").value;
    var numcode = keyevent.charCode || keyevent.KeyCode;
    if(numcode == 13)
        window.calculationResult(initialInput);  
}

function maintainHistory(numberString) {
    debugger;
    if(para == 'undefined')
     para = numberString;
    else
     para = para + " " + numberString;
}

function displayHistory()
{
    var res = para.split(" ");
    document.getElementById("history-display-box").value = res;
}
