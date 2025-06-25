const apiKey="cdbb3b35ff8917d9f688f449e78674e6"//key for weather api
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=&appid=${apiKey}`//URL API
const city= document.getElementById("cityInput").value;

//function to fetch weather data
function getWeatherData(city) {
    if (city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeatherData(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);

        });
    }else{
        alert("Enter a City please");
    }

}
//adding event listener to submit button
const submit=document.querySelector('button')
//function to display weather data
function displayWeatherData(data) {
    const temperature = document.querySelector(".temperature");
    const city = document.querySelector(".city");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");
    const weatherIcon = document.getElementById("weatherIcon");





}
