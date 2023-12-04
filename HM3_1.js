// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: 
// Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.

let input = prompt("Введіть число: ");
let number = Number(input);

if (number === 1) {
    console.log("1 не є простим або складеним числом");
} else {
    console.log(`Число ${number} ${isPrimeNumber(number) ? 'є простим' : 'не є простим'} числом`);
}

function isPrimeNumber(number) {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}