document.addEventListener("DOMContentLoaded", function() {

    const apiKey="cdbb3b35ff8917d9f688f449e78674e6"//key for weather api
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=&appid=${apiKey}`//URL API
    const city= document.getElementById("cityInput");
    const form= document.querySelector("form")
    const submitBtn=document.querySelector('button')
    //adding event listener to submit button

    function submitCity(){

        submitBtn.addEventListener("click",(e)=>{
            e.preventDefault()
            getWeather(city.value.charAt(0).toUpperCase() + city.value.slice(1).toLowerCase())
            // console.log(e)
            // console.log(city.value.charAt(0).toUpperCase() + city.value.slice(1).toLowerCase())
            form.reset()
        })
    }

    submitCity();

    //function to fetch weather from API
    function getWeather(cityName){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                showWeather(data);


            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert(error);
            });

    }
    //function to show the weather data
    function showWeather(data){
    const cityDisplay=document.querySelector(".city")
    const temperatureDisplay=document.querySelector(".temperature")
    const humidityDisplay=document.querySelector(".humidity")
    const windDisplay=document.querySelector(".wind")
    const weatherIcon=document.getElementById("weatherIcon")
    const quotes = document.querySelector(".funQuotes")
    // Default icon for unknown weather

    if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
        quotes.innerHTML = `<p>That blue up there?Natures default wallpaper.</p>`;

    } else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
        quotes.innerHTML = `<p>Sun's ghosted once again🤷🏻</p>`;
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rain.png";
        quotes.innerHTML = `<p>Sky's throwing a tantrum and we're all invited😂'</p>`;
    }else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "./images/snow.png";
        quotes.innerHTML = `<p>literally Elsa out here!🥶🥶</p>`;
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png";
        quotes.innerHTML = `<p>Sky's out here soft launching a storm😂</p>`;
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
        quotes.innerHTML = `<p>Clouds said we keep it ✨mid✨ today.</p>`;
    }
    // console.log(cityDisplay)
    // console.log(temperatureDisplay)
    // console.log(humidityDisplay)
    // console.log(windDisplay)
    // console.log(data.weather[0].main)
    cityDisplay.textContent=data.name;
    temperatureDisplay.textContent=`${Math.round(data.main.temp)}°C`;
    humidityDisplay.textContent=`${data.main.humidity}%`;
    windDisplay.textContent=`${Math.round(data.wind.speed)} km/hr`;
        const weatherInfo = document.querySelector(".weatherinfo");
        weatherInfo.style.display = "block"; // Show the weather info section
        // console.log(weatherInfo)
    }
    // add a moushover effect to the weather icon
    const weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.addEventListener("mouseover", function() {
        weatherIcon.style.transform = "scale(1.1)";
        weatherIcon.style.transition = "transform 0.3s ease";
    });
    weatherIcon.addEventListener("mouseout", function() {
        weatherIcon.style.transform = "scale(1)";
        weatherIcon.style.transition = "transform 0.3s ease";
    }
    );
});