let slovo = prompt('Введите слово', '');
let slovo2 = slovo.toLocaleLowerCase();

if (slovo2 === slovo2.split('').reverse().join('')){
    alert(`Слвово ${slovo} является палиндромом`)
} else {
    alert(`Слвово ${slovo} не является палиндромом`)
}