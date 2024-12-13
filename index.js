

function numbers(num){
    document.forms.calc.display.value +=num;
}
// function tan(num){
//     document.forms.calc.display.value += Math.tan;
// }

// function tan(num){
//     document.forms.calc.display.value +=Math.tan;
// }



// document.getElementById("tanBtn").addEventListener("click", printTan);

// function printTan(){
//     document.getElementById("tanBtn").innerHTML = 'tan';
// }
function tan(){
    document.forms.calc.display.value += Math.tan(display.value);
}
function cos(){
    document.forms.calc.display.value += "cos";
}
function sin(){
    document.forms.calc.display.value += "sin"
}

// let tanClick = document.querySelector('#tanBtn');

// function useTan(){
//     Math.tan(document.forms.calc.display.value);
// }

// tanClick.addEventListener("click", useTan)

