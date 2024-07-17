const checkLengthString = (string, maxLenghString) => {
  const result = string.length <= maxLenghString;
  return result;
};


// Строка короче 20 символов
checkLengthString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLengthString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLengthString('проверяемая строка', 10); // false

const isPolindrome = (string) => {
  const result = string.toLowerCase().replaceAll(' ','');
  return result === result.split('').reverse().join('');
};


// Строка является палиндромом
isPolindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPolindrome('ДовОд'); // true
// Это не палиндром
isPolindrome('Кекс'); // false
// Несмотря на разный регистр, тоже палиндром
isPolindrome('Шалаш'); // true
// Это не палиндром
isPolindrome('кошка'); // false
// Это палиндром
isPolindrome('Лёша на полке клопа нашёл '); // true
