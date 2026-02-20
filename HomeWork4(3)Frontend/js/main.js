function task1() {
  const dollars = [100, 150, 200, 250, 300, 350];
  const rate = 87;
  const soms = dollars.map(dollar => dollar * rate);

  document.getElementById('result1').innerHTML =
    'Результат: [' + soms.join(', ') + '] сом';
  document.getElementById('result1').classList.add('show');
}

function task2() {
  const grades = [5, 4, 3, 4, 5, 3, 4, 3, 4, 5, 5];
  const european = grades.map(grade => {
    if (grade === 5) return 'A';
    if (grade === 4) return 'B';
    if (grade === 3) return 'C';
  });

  document.getElementById('result2').innerHTML =
    'Результат: [' + european.join(', ') + ']';
  document.getElementById('result2').classList.add('show');
}

function task3() {
  const phones = [
    "🇺🇸4155552671", "🇺🇸2125558392", "🇺🇸3055551299",
    "🇩🇪0301234567", "🇩🇪0897654321", "🇩🇪0409876543",
    "🇰🇬312123456", "🇰🇬551987654", "🇰🇬770456789",
    "🇷🇺4951234567"
  ];

  const withCodes = phones.map(phone => {
    if (phone.startsWith('🇺🇸')) return phone.replace('🇺🇸', '+1 ');
    if (phone.startsWith('🇩🇪')) return phone.replace('🇩🇪', '+49 ');
    if (phone.startsWith('🇰🇬')) return phone.replace('🇰🇬', '+996 ');
    if (phone.startsWith('🇷🇺')) return phone.replace('🇷🇺', '+7 ');
  });

  document.getElementById('result3').innerHTML =
    'Результат: <br>' + withCodes.join('<br>');
  document.getElementById('result3').classList.add('show');
}

function task4() {
  const phones = [
    "0700 123 456", "0770 234 567", "0550 345 678",
    "0551 456 789", "0555 567 890", "0705 678 901",
    "0707 789 012", "0755 890 123", "0500 901 234",
    "0505 012 345"
  ];

  const mega = phones.filter(phone => phone.charAt(2) === '5');

  document.getElementById('result4').innerHTML =
    'Номера МЕГА: <br>' + mega.join('<br>');
  document.getElementById('result4').classList.add('show');
}

function task5() {
  const carNumbers = [
    "01 KG 123 ABC", "02 KG 456 DEF", "03 KG 789 GHI",
    "01 KG 321 JKL", "05 KG 654 MNO", "06 KG 987 PQR",
    "07 KG 111 STU", "01 KG 222 VWX", "09 KG 333 YZA",
    "01 KG 444 BCD"
  ];

  const bishkek = carNumbers.filter(num => num.startsWith('01'));

  document.getElementById('result5').innerHTML =
    'Номера Бишкека: <br>' + bishkek.join('<br>');
  document.getElementById('result5').classList.add('show');
}

function task6() {
  const scores = [8, 10, 7, 10, 8, 9, 4, 10];
  const total = scores.reduce((sum, score) => sum + score, 0);

  document.getElementById('result6').innerHTML =
    'Итого баллов: ' + total;
  document.getElementById('result6').classList.add('show');
}

function task7() {
  const attendance = [1, 0, 1, 1, "online", "online", 1, 0];
  const present = attendance.reduce((count, day) => {
    if (day === 1 || day === "online") {
      return count + 1;
    }
    return count;
  }, 0);

  document.getElementById('result7').innerHTML =
    'Посещений: ' + present + ' из ' + attendance.length;
  document.getElementById('result7').classList.add('show');
}