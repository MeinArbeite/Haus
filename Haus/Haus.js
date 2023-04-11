/*1) Используя регулярные выражения необходимо сделать
поле для ввода эл почты (проверять на @) и пароля
(проверять наличие букв больших и маленьких, 
цифр и наличие не менее 8 символов),
а так же возможность по нажатию 
на кнопку увидеть пароль и поле подтвердите пароль*/


const parol = "1234567890";

// const regExp = /[0-9A-Za-z]/g;
const simbol = /\w/ig;

console.log(parol.replace(simbol, "*"));

const passwordInput = document.querySelector("#passwordInput");
const passwordCheck = document.querySelector(".passwordCheck");
const passwordResult = document.querySelector(".passwordResult");

const passwordRegExp = /^\@/;
// \d{3} \d{2}-\d{2}-\d{2}$/;

passwordCheck.addEventListener("click", () => {
    if (passwordRegExp.test(passwordInput.value)) {
      passwordResult.innerText = "ok :)";
      passwordResult.style.color = "green";
    } else {
        passwordResult.innerText = "not ok >:(";
        passwordResult.style.color = "red";
    }
});