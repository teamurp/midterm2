const apiKey = 'cd4beaef3d5699658730955c8c306d2d'
let url
const input = document.querySelector('.header-input')
const todayLocation = document.querySelector('.today-location')
const todayTemp = document.querySelector('.today-temp')
const main = document.querySelector('.main')

let weatherInfo = {}

async function getWeather() {
    try {
        main.style.display = 'block'
        url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + apiKey
        const response = await fetch(url)
        if(!response.ok) {
            console.log('Error')
        }
        const weather = await response.json()
        weatherInfo = weather
        console.log(weather)
        todayLocation.innerHTML = 'Location: ' + weather.city.name
        const todayTemp = document.querySelector('.today-temp')
        todayTemp.innerHTML = Math.round(weather.list[0].main.temp - 273.15) + '°C'
        const todayHumidity = document.querySelector('.today-humidity')
        todayHumidity.innerHTML = 'Humidity: ' + Math.round(weather.list[0].main.humidity) + '%'
        const todayWind = document.querySelector('.today-wind')
        todayWind.innerHTML = 'Wind: ' + Math.round(weather.list[0].wind.speed) + ' m/s'
        const todayCondition = document.querySelector('.today-condition')
        todayCondition.innerHTML = weather.list[0].weather[0].main
        const todayIcon = document.querySelector('.today-icon')
        todayIcon.src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
        
        const forecastTemp = document.querySelectorAll('.forecast-temp')
        const forecastDate = document.querySelectorAll('.forecast-date')
        const forecastCondition = document.querySelectorAll('.forecast-condition')
        const forecastIcon = document.querySelectorAll('.forecast-day img')
        const forecastTitle = document.querySelector('.forecast-title')
        for(let i=0; i<5; i++) {
            let day = 7 + i*8
            let night = 2 + i*8
            forecastTemp[i].innerHTML = Math.round(weather.list[day].main.temp - 273.15) + '°C/<br>' + Math.round(weather.list[night].main.temp - 273.15) + '°C'
            console.log(day)
            console.log(night)
            let date = weather.list[day].dt_txt
            forecastDate[i].innerHTML = date.substring(0, date.indexOf(' '))
            forecastCondition[i].innerHTML = weather.list[day].weather[0].main
            forecastIcon[i].src = 'https://openweathermap.org/img/wn/' + weather.list[day].weather[0].icon + '@2x.png';
            forecastTitle.innerHTML = '5-Day Forecast in ' + weather.city.name
        }
    } catch(error) {
        console.log(error)
    }
}
const selectUnit = document.querySelector('#selectUnit')
const forecastTemp = document.querySelectorAll('.forecast-temp')

selectUnit.addEventListener('change', (e) => {
    if(selectUnit.value === 'celcius') {
        todayTemp.innerHTML = ''
        forecastTemp.forEach((temp, i) => {
            temp.innerHTML = ''
            const tempDay = weatherInfo.list[7 + i*8].main.temp
            const tempNight = weatherInfo.list[2 + i*8].main.temp
            temp.innerHTML = Math.round(tempDay - 273.15) + '°C/<br>' + Math.round(tempNight - 273.15) + '°C'
        });
        todayTemp.innerHTML = Math.round(weatherInfo.list[0].main.temp - 273.15) + '°C'
    } else if(selectUnit.value === 'fahrenheit') {
        todayTemp.innerHTML = ''
        forecastTemp.forEach((temp, i) => {
            temp.innerHTML = ''
            const tempDay = weatherInfo.list[7 + i*8].main.temp
            const tempNight = weatherInfo.list[2 + i*8].main.temp
            temp.innerHTML = Math.round((tempDay - 273.15) * 1.8 + 32) + '°F/<br>' + Math.round((tempNight - 273.15) * 1.8 + 32) + '°F'
        })
        todayTemp.innerHTML = Math.round((weatherInfo.list[0].main.temp - 273.15) * 1.8 + 32) + '°F'
    }
})