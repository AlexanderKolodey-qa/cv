/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Если вы хотите иметь то, что никогда не имели, вам придётся делать то, что никогда не делали. 🙏🏻')
})