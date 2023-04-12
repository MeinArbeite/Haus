/*1) Используя регулярные выражения необходимо сделать
поле для ввода эл почты (проверять на @) и пароля
(проверять наличие букв больших и маленьких, 
цифр и наличие не менее 8 символов),
а так же возможность по нажатию 
на кнопку увидеть пароль и поле подтвердите пароль*/


// const parol = "1234567890";

// const regExp = /[0-9A-Za-z]/g;
// const simbol = /\w/ig;

// console.log(parol.replace(simbol, "*"));

const gmailInput = document.querySelector("#gmailInput");
const gmailCheck = document.querySelector(".gmailCheck");
const gmailResult = document.querySelector(".gmailResult");

const gmailRegExp = /\w\@\w/;



gmailCheck.addEventListener("click", () => {
    if (gmailRegExp.test(gmailInput.value)) {
      gmailResult.innerText = "ok :)";
      gmailResult.style.color = "green";
    } else {
        gmailResult.innerText = "not ok >:(";
        gmailResult.style.color = "red";
    }
});


const passwordInput = document.querySelector("#passwordInput");
const passwordCheck = document.querySelector(".passwordCheck");
const passswordResult = document.querySelector(".passwordResult");

passwordCheck.addEventListener("click", () => {
  if (passwordInput.value.length >= 8) {
    passswordResult.innerText = "ok :)";
    passswordResult.style.color = "green";
  } else {
    passswordResult.innerText = "not ok >: (";
    passswordResult.style.color = "red";
  }
});


let left = 0;
const block = document.querySelector(".block");
let moveLeft = true;

function move() {
  if(moveLeft) {
    left = left + 1
    block.style.left=left+"px"
    console.log(left);
  }else {
    left -=  1
    block.style.left=left+"px"
    console.log(left);
  }
  if (left === 0) {
    moveLeft = true

  }else if (left === 600) {
    moveLeft = false
  }
  setTimeout(move, 10)
}

move()
// setInterval(move, 500);
