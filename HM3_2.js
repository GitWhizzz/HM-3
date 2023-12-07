// Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.

let input = prompt("Введіть число: ");
let number = Number(input);

for (let i = 1; i < number; i++) {
    if (isPerfectNumber(i)) console.log(i);
}

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}
