/* 
  script.js
  JavaScript логика для моего первого сайта
  Обрабатывает клики по кнопке, меняет содержимое
*/

// 1. Находим ВСЕ элементы на странице
const button = document.getElementById('myButton');
const resetButton = document.getElementById('resetButton'); // Кнопка сброса цвета
const resetCounterButton = document.getElementById('resetCounterButton'); // НОВАЯ кнопка
const counter = document.getElementById('counter');

// 2. Переменная для хранения количества кликов
let count = 0;

// 3. Функция увеличения счётчика
function increase() {
    count++;
    counter.textContent = count;
}

// 4. Обработчик для основной кнопки
button.addEventListener('click', function() {
    button.textContent = 'Ура! Нажато!';
    document.body.style.backgroundColor = 'lightgreen';
    console.log('Кнопка была нажата!');
    increase(); // Увеличиваем счётчик
});

// 5. Обработчик для кнопки сброса ЦВЕТА
resetButton.addEventListener('click', function() {
    // Возвращаем первоначальный текст первой кнопке
    button.textContent = 'Нажми меня';
    
    // Возвращаем первоначальный цвет фона
    document.body.style.backgroundColor = 'lightblue';
    
    console.log('Цвет сброшен!');
});

// 6. Обработчик для кнопки сброса СЧЁТЧИКА (НОВАЯ ФУНКЦИЯ!)
resetCounterButton.addEventListener('click', function() {
    // Сбрасываем счётчик
    count = 0;
    counter.textContent = count;
    
    console.log('Счётчик сброшен! Текущее значение: 0');
});