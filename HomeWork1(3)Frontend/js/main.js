const redButton = document.getElementById('redButton');
const yellowButton = document.getElementById('yellowButton');
const greenButton = document.getElementById('greenButton');
const messageText = document.getElementById('messageText');

redButton.addEventListener('click', function() {
  messageText.textContent = 'Стоп';
  messageText.style.color = '#e74c3c';
});

yellowButton.addEventListener('click', function() {
  messageText.textContent = 'Ожидание';
  messageText.style.color = '#f39c12';
});

greenButton.addEventListener('click', function() {
  messageText.textContent = 'Идти';
  messageText.style.color = '#2ecc71';
});