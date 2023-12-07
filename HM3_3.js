// Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки. Уся ялинка має бути реалізована одним рядком

let input = prompt("Введіть висоту ялинки: ");

try {
    let height = Number(input);

    if (!Number.isInteger(height) || height <= 1) {
        throw new Error("Введіть ціле число більше 1");
    }

    let space = ' ';
    let star = '*';
    let tree = '';

    for (let i = 0; i < height; i++) {
        let spaceLine = space.repeat(height - i - 1);
        let starLine = star.repeat(2 * i + 1);
        tree += spaceLine + starLine + spaceLine + '\n';
    }

    console.log(tree);
} catch (error) {
    console.error(error.message);
}