// let p = document.getElementById("salam1");

// function left(){
//     p.style.textAlign = "left";
// }

// function center(){
//     p.style.textAlign = "center";
// }

// function right(){
//     p.style.textAlign = "right";
// }




// turxan = 1000;

// turxan = turxan +100
// hakan  =600 + 200

// hakan = 550;

// console.log('turxan emek haqqi'+ turxan)
// console.log('hakan emek haqqi' + hakan)



// let username = prompt('adinizi daxil edin');
// console.log("salam eziz" + username);
// console.log ('salam ${username}');

// let num1 = 8;
// let num2 = 67.545646;
// console.log(num2);

// let user1 = {
//     name: 'Turxan',
//     surname: 'Memmedov',
//     department: 'Front End Developer',
//     isMarried: 'false',
// }

// let user2 = {
//     name: 'Hakan',
//     surname: 'Fidan',
//     department: 'Back End Developer',
//     isMarried: 'false',
// }
// console.log ('Turxan:',user1)
// console.log ('Hakan:',user2)

// console.log (2 *2)

// let a = 'salam'
// let b = '5'

// console.log(a * b)
// console.log (a + b);



// var num1 = parseInt( prompt ("birinci reqemi daxil edin"));
// var num2 = parseInt(prompt ("ikinci reqemi daxil edin"));
// var operator = prompt ("opreatoru daxil edin (+,-,*,/)");

// console.log(num1+"");
// console.log(num2+"");
// if (operator === '+'){
//     console.log(num1 + num2);
// }else if(operator === '-'){
//     console.log(num1 - num2);
// }else if(operator === '*'){
//     console.log(num1 * num2)
// }else if(operator === '/'){
//     console.log (num1 / num2)
// }else{
//     console.log('ERROR - Duzgun operatoru daxil edin');
// }




const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});








