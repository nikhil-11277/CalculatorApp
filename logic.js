// Function that display value
function dis(val) {
  document.getElementById("result").value += val;
}

function myFunction(event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  )
    document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
  if (event.keyCode === 13) {
    console.log("Enter");
    let x = document.getElementById("result").value;
    console.log(x);
    solve();
  }
};

function solve() {
  let x = document.getElementById("result").value;
  let y;
   
    if (x === "") {
        y = 0;
    } else {
        y = eval(x);
    }
    
    document.getElementById("result").value = y;
}

function clr() {
  document.getElementById("result").value = "0";
}

function dis(val) {
  if (val === "Del") {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
  } else {
    document.getElementById("result").value += val;
  }
}
