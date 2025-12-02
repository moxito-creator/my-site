/* 
  script.js
  JavaScript логика для моего первого сайта
*/

// 1. Загружаем сохранённые данные из localStorage
const savedCount = localStorage.getItem('clickCount') || 0;
const userName = localStorage.getItem('userName') || 'Guest';
const theme = localStorage.getItem('theme') || 'light';
const themeToggleBtn = document.getElementById('themeToggleBtn');
const showStorageBtn = document.getElementById('showStorageBtn');
const storageInfo = document.getElementById('storageInfo');
// 2. Находим ВСЕ элементы на странице
const button = document.getElementById('myButton');
const resetButton = document.getElementById('resetButton');
const resetCounterButton = document.getElementById('resetCounterButton');
const counter = document.getElementById('counter');
const resetAll = document.getElementById('resetAll');
const welcomeElement = document.getElementById('welcome'); // Убери если нет в HTML

// 3. Применяем сохранённые настройки
if (welcomeElement) {
    welcomeElement.textContent = `Добро пожаловать, ${userName}!`;
}

// 4. Инициализируем счётчик сохранённым значением
let count = Number(savedCount);
counter.textContent = count;

// 5. Функция увеличения счётчика
function increase() {
    count++;
    counter.textContent = count;
    localStorage.setItem('clickCount', count);
}

// 6. Обработчик для основной кнопки
button.addEventListener('click', function() {
    button.textContent = 'Ура! Нажато!';
    document.body.classList.add('clicked-green'); // Добавить класс
    console.log('Кнопка была нажата!');
    increase();
});

// 7. Обработчик для кнопки сброса ЦВЕТА
resetButton.addEventListener('click', function() {
    button.textContent = 'Нажми меня';
    document.body.classList.remove('clicked-green'); // Удалить класс
    console.log('Цвет сброшен!');
});

// 8. Обработчик для кнопки сброса СЧЁТЧИКА
resetCounterButton.addEventListener('click', function() {
    count = 0;
    counter.textContent = count;
    localStorage.setItem('clickCount', count); // ← ДОБАВЬ СОХРАНЕНИЕ!
    console.log('Счётчик сброшен! Текущее значение: 0');
});
// 9. Обработчик для переключения темы
themeToggleBtn.addEventListener('click', function() {
    const isDark = document.body.classList.contains('dark-theme');
    
    if (isDark) {
        // Включаем светлую тему
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggleBtn.textContent = '🌙 Тёмная тема';
        localStorage.setItem('theme', 'light');
    } else {
        // Включаем тёмную тему
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️ Светлая тема';
        localStorage.setItem('theme', 'dark');
    }
    
    console.log('Тема изменена');
});

// 10. Обработчик для показа localStorage (с анимацией)
let storageVisible = false;

showStorageBtn.addEventListener('click', function() {
    if (storageVisible) {
        // Скрываем с анимацией
        storageInfo.classList.remove('visible');
        showStorageBtn.textContent = '📊 Показать сохранённое';
        storageVisible = false;
        console.log('Данные localStorage скрыты');
        
        // Очищаем контент после анимации
        setTimeout(() => {
            storageInfo.innerHTML = '';
        }, 500); // 500ms = время анимации из CSS
    } else {
        // Показываем с анимацией
        const allData = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allData[key] = localStorage.getItem(key);
        }
        
        let infoHTML = '<h3>📁 Данные в localStorage:</h3>';
        if (Object.keys(allData).length === 0) {
            infoHTML += '<p>Нет сохранённых данных</p>';
        } else {
            for (const [key, value] of Object.entries(allData)) {
                infoHTML += `<p><strong>${key}:</strong> ${value}</p>`;
            }
        }
        
        // Устанавливаем контент
        storageInfo.innerHTML = infoHTML;
        // Даём время браузеру на отрисовку, затем запускаем анимацию
        setTimeout(() => {
            storageInfo.classList.add('visible');
        }, 10);
        
        showStorageBtn.textContent = '📁 Скрыть сохранённое';
        storageVisible = true;
        console.log('Показаны данные localStorage:', allData);
    }
});

// 11. Применяем сохранённую тему при загрузке
if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️ Светлая тема';
} else {
    document.body.classList.add('light-theme');
}
    // 12. Обработчик для кнопки сброса всего
resetAll.addEventListener('click', function() {
    // 1. Сбрасываем счётчик
    count = 0;
    counter.textContent = count;
    localStorage.setItem('clickCount', count);
    
    // 2. Возвращаем текст основной кнопки
    button.textContent = 'Нажми меня';
    
    // 3. Убираем зелёный фон если есть
    document.body.classList.remove('clicked-green');
    
    // 4. ВОТ ЭТО НОВОЕ: Возвращаем светлую тему
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeToggleBtn.textContent = '🌙 Тёмная тема';
    localStorage.setItem('theme', 'light');
    
    // 5. Скрываем блок с localStorage если открыт
    if (storageVisible) {
        storageInfo.classList.remove('visible');
        showStorageBtn.textContent = '📊 Показать сохранённое';
        storageVisible = false;
        setTimeout(() => {
            storageInfo.innerHTML = '';
        }, 500);
    }
    
    console.log('✅ Всё сброшено! Счётчик: 0, Тема: светлая');
});