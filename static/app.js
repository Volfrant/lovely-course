var x = document.getElementById('add');

x.onclick = function () {
    document.getElementById('textBox').innerHTML += document.getElementById('myText').value +"</br>";
};

var lolis = 2;
var someNum2 = 2;

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(lolis, someNum2));