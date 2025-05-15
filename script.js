const forecastBtn = document.querySelector('.forecast-btn');
const forecast = document.querySelector('.current-forecast h1');
const forecastProbability = document.querySelector('.current-forecast p')
const forecastsContainer = document.querySelector('.forecasts')

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

function addForecast() {

    const forecastNumber = getRandomNumber(1, 4);

    function doForecast() {

        const predictionNumber = forecastNumber;
        let predictionText = "";

        if (predictionNumber == 1) {
            predictionText = "Сегодня будет отличный день!";
        } else if (predictionNumber == 2) {
            predictionText = "Твое желание исполнится!";
        } else {
            predictionText = "Ты поедешь в прекрасное путешествие!";
        }
        return predictionText;
    }


    const newForecast = doForecast(forecastNumber);
    forecast.textContent = newForecast;

    const newProbability = getRandomNumber(1, 100);
    forecastProbability.textContent = `Вероятность: ${newProbability}  %`;

    const forecastItem = document.querySelector("#forecast-item");

    function makeForecastByTemplate(newForecast, newProbability) {
        const myForecast = forecastItem.content.cloneNode(true);

        myForecast.querySelector('h3').textContent = newForecast;
        myForecast.querySelector('p').textContent = `Вероятность: ${newProbability}  %`;

        return myForecast;
    }
    const forecastList = makeForecastByTemplate(newForecast, newProbability);
    forecastsContainer.prepend(forecastList);
}


forecastBtn.addEventListener('click', addForecast);






/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */