//1 дз
let password = "_zxd";

if (password.length >= 4 && (password.includes ('-') || password.includes ('_'))) {
    console.log('норм пароль');
} else {
    console.log('неа');
}

//2 дз

let userName = "влАд"; 
let userSurname = "нАзаРОв";

let formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

let nameMessage = (userName !== formattedUserName) ? "Имя было преобразовано" : "Имя осталось без изменений";

let formattedUserSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase();

let surnameMessage = (userSurname !== formattedUserSurname) ? "Фамилия была преобразована" : "Фамилия осталась без изменений";

console.log(formattedUserName);
console.log(nameMessage);
console.log(formattedUserSurname);
console.log(surnameMessage);

//3 дз
let number = 4; 
if (number % 2 === 0) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}
 