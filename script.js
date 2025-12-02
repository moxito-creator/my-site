/* 
  script.js
  JavaScript логика для моего первого сайта
  Обрабатывает клики по кнопке, меняет содержимое
*/
const button = document.getElementById('myButton');
// 2. Добавляем действие при клике
button.addEventListener('click', function() {
    // 3. Меняем текст кнопки
    button.textContent = 'Ура! Нажато!';
    
    // 4. Меняем цвет фона страницы
    document.body.style.backgroundColor = 'lightgreen';
    
    // 5. Выводим сообщение в консоль
    console.log('Кнопка была нажата!');
});
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
    // Возвращаем первоначальный текст первой кнопке
    button.textContent = 'Нажми меня';
    
    // Возвращаем первоначальный цвет фона
    document.body.style.backgroundColor = 'lightblue';
    
    console.log('Всё сброшено!');
});
