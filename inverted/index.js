
const writeBack = document.getElementById("writeBack");
const typing = document.getElementById("typing");

document.addEventListener('keydown', escrever);

function escrever(){
    var str = typing.value

    var output = str.split('').reverse().join("");
    writeBack.innerHTML = output
   
}




//How to do it 
var str = "hello";
console.log(str);

var output = str.split('').reverse().join("");
console.log(output);

