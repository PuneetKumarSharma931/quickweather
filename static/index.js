
const weatherImage = document.getElementById("weatherImg");
const city = document.getElementById('city');
const button = document.getElementById('search');

const apiKey = "b271749ed64f5a4d4ffb7344813946b0";

const getData = async (city)=>{

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

        return await response.json();
    }
    catch(e) {

        console.log(e);
    }
}

const First_Request = async () => {

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=${apiKey}`);

        return await response.json();
    }
    catch(e) {

        console.log(e);
    }
}

const putData = (Data) =>{

    let location = document.getElementsByClassName('location')[0];
    let weather_Status = document.getElementById('weather_status');
    let temp = document.getElementsByClassName('temp')[0];
    let temp_min_max = document.getElementsByClassName('temp_min_max')[0];
    let PH = document.getElementsByClassName('more_Info')[0];
    let WF = document.getElementsByClassName('more_Info')[1];

    location.innerHTML = `<i class="fas fa-street-view"></i>${Data.name}, ${Data.sys.country}`;
    weatherImage.src = `https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`;
    weather_Status.innerHTML = `${Data.weather[0].main} | ${Data.weather[0].description}`;
    temp.innerHTML = `${Data.main.temp}°C`;
    temp_min_max.innerHTML = `Min ${Data.main.temp_min}°C | Max ${Data.main.temp_max}°C`;
    PH.innerHTML = `Pressure ${Data.main.pressure}Pa | Humidity ${Data.main.humidity}%`;
    WF.innerHTML = `Wind Speed ${Data.wind.speed}km/h | Feels Like ${Data.main.feels_like}°C`;
}

const First_Data = async ()=> {

    let firstResponse = await First_Request();

    putData(firstResponse);
}

button.addEventListener('click', async ()=>{

    let cityName = city.value;
    city.value = "";

    let responseData = await getData(cityName);

    putData(responseData);
});

First_Data();


 