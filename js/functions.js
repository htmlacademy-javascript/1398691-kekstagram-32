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

function translateTime(time) {
  const [hour, minutes] = time.split(':');
  const minuteInOneHour = 60;

  return hour * minuteInOneHour + parseInt(minutes, 10);
}

function checkMeeting(dayStart, dayEnd, meetingTimeStart, meetingDuration){
  const dayTimeStartInMimutes = translateTime(dayStart);
  const dayTimeEndInMimutes = translateTime(dayEnd);
  const meetingTimeStartInMimutes = translateTime(meetingTimeStart);

  return meetingTimeStartInMimutes >= dayTimeStartInMimutes &&
    meetingTimeStartInMimutes + meetingDuration <= dayTimeEndInMimutes;
}

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
checkMeeting('08:00', '17:30', '14:00', 90); // true
checkMeeting('8:0', '10:0', '8:0', 120); // true
checkMeeting('08:00', '14:30', '14:00', 90); // false
checkMeeting('14:00', '17:30', '08:0', 90); // false
checkMeeting('8:00', '17:30', '08:00', 900); // false


