// Скрипт для управления прелоадером
window.addEventListener('load', () => { //регистрирует обработчик события load у объекта window
  const preloader = document.getElementById('preloader'); //ищем элемент preloader в DOM с помощью метода document.getElementById.
  if (preloader) {
    preloader.classList.add('hidden'); //С помощью свойства classList добавляем класс hidden к элементу preloader для анимации скрытия
    setTimeout(() => { //таймер
      preloader.style.display = 'none'; // Полное скрытие элемента после анимации
    }, 500); // Время должно совпадать с длительностью CSS-анимации
  }
});

// Скрипт для обработки отправки формы
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращение отправки формы чтобы страница не перезагружалась сразу

  // Показать сообщение об успешной отправке
  const successMessage = document.getElementById('successMessage'); // Находим эл с ID sM, он используется для сообщения об отправке

  successMessage.style.display = 'block';  // элемент занимает место на странице как блочный элемент
  // делаем его видимым для пользователя тк он скрыт

  // Скрыть сообщение через 3 секунды
  setTimeout(() => {
    successMessage.style.display = 'none'; // Прячем сообщение
  }, 3000);

  // Сброс формы
  this.reset();
});
