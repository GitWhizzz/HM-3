// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: 
// Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.

let input = prompt("Введіть число: ");
let number = Number(input);

GetPrimeNumberLog(number);

function GetPrimeNumberLog(number) {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return console.log(`Число ${number} не є простим числом`);
            }
        }
        return console.log(`Число ${number} є простим числом`);
    } else {
        return console.log(`Число ${number} не є простим числом`);
    }
}