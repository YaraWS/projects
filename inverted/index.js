
const writeBack = document.getElementById("writeBack");
const typing = document.getElementById("typing");
var str = "hello";
//console.log(str);

//Break String into an array > reverse > join
var output = str.split('').reverse().join("");
console.log(output);

document.addEventListener('keydown', escrever);

function escrever(){
    var str = typing.value
    var output = str.split('').reverse().join("");
    writeBack.innerHTML = output
   
}









