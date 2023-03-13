async function search() {
    const container = document.querySelector('.container');
    const weatherBox = document.querySelector('.weather-box');
    const weatherDetails = document.querySelector('.weather-details');
    const image = document.querySelector('.weather-box img');
    let api_key = '923b21fa48484346a9444022220806'
    let city = document.querySelector('.input').value;
    let url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&lang=ru&aqi=yes`;
    let res = await fetch(url);
    let data = await res.json();
    document.querySelector('.description').innerHTML = data['current']['condition']['text'];
    document.querySelector('.temp').innerHTML = 'Температура: ' + data['current']['temp_c'] + '°';
    document.querySelector('.humidity').innerHTML = 'Влажность: ' + data['current']['humidity'];

    switch (data['current']['condition']['text']) {
        case 'Дымка':
            image.src = 'image/cloud.png';
            break;
        case 'Пасмурно':
            image.src = 'image/cloud.png';
            break;
        case 'Солнечно':
            image.src = 'image/sun.png';
            break;
        case 'Переменная облачность':
            image.src = 'image/cloudy_sun.png';
            break;
    }
    // weatherBox.style.display = '';
    // weatherDeatails.style.display = '';
    weatherBox.classList.add('fadein')
    weatherDetails.classList.add('fadein')
    container.style.height = '700px';
}

function handleKeyPress(e){
    var key=e.keyCode || e.which;
     if (key === 13){ // Клавиша Enter
       search()
     }
   }