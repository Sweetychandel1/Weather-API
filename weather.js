let input =document.querySelector("input");
let btn=document.querySelector("button");
let cityName =document.querySelectorAll("h4")[0];
let temperature =document.querySelectorAll("h4")[1];
let windSpeed =document.querySelectorAll("h4")[2];
let humidity =document.querySelectorAll("h4")[3];
let climate =document.querySelectorAll("h4")[4];

// console.log(input,btn,cityName,temperature,windSpeed,humidity,climate);

btn.addEventListener("click",async()=>{
    let apikey=`e09ed1aa6172556968b3811fd4c6e589`;
let datafromServer= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}`);
let jsonData= await datafromServer.json();

console.log(datafromServer);
console.log(jsonData);
cityName.innerHTML=`City Name: ${jsonData.name}`;
temperature.innerHTML=`Temperature : ${(jsonData.main.temp - 273).toFixed(2)}℃`;
windSpeed.innerHTML=`Wind Speed : ${jsonData.wind.speed} km/hr`;
humidity.innerHTML=`Humidity ${jsonData.main.humidity} %`;
climate.innerHTML=`Weather : ${jsonData.weather[0].main}`

});




