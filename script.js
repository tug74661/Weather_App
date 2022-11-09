"use strict";
const form = document.querySelector(".search form");
const input = document.querySelector(".search input");
const body = document.querySelector("body");
const apiKey = "8f37e47ffee0da35f60c39891b4f2c21";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    console.log(inputVal);
    
    let link = "https://api.openweathermap.org/data/2.5/weather?q=";
    //let link2 = "&appid="+apiKey;
    let link2 = "&appid="+apiKey;
    let url = link+inputVal+link2;
    
    const weatherData = fetch(encodeURI(url))
    .then(response => response.json());

    weatherData.then(x => {   
       const { main, name, wind, weather } = x;
       console.log(x);
       console.log(name);
       document.querySelector(".city").innerHTML = "Weather in " + name;
       
       console.log(main["temp"]);
       document.querySelector(".temp").innerHTML = Math.round((1.8*(main["temp"] - 273)+32))+ " <sup>&#8457</sup>";
      
       console.log(weather[0]["description"]);
       let description = weather[0]["description"];
       document.querySelector(".description").innerHTML = weather[0]["main"];
       //document.querySelector("body").style.backgroundImage = 'url(http://)'
       console.log(main["humidity"]);
       document.querySelector(".humidity").innerHTML = "Humidity: " + main["humidity"] + " %";
       console.log(wind["speed"]);
       document.querySelector(".wind").innerHTML = "Wind speed: " + Math.round(wind["speed"])+ " mph";
    })
    .catch(console.error);

});

//sys["country"]["id"]

/*let submit = document.getElementById("searchButton");
let input = document.getElementById("searchBar");
let apiKey = "8f37e47ffee0da35f60c39891b4f2c21";
let link = 'https://api.openweathermap.org/data/2.5/weather?q=';
let link2 = '&appid=8f37e47ffee0da35f60c39891b4f2c21';




function generateURL(){
    
    console.log(input.value);
    link+= input.value;
    let url = link+link2;

    console.log(url);
    return url;
}

let request = generateURL();

submit.addEventListener("click", generateURL);

let weatherData = fetch(request)
.then(response => response.json());
    
weatherData.then(x => {
    console.log(x);
})
.catch(console.error);
*/

/*const input = document.querySelector("#search-bar").value;
const search = document.querySelector("#searchButton");
//console.log(input);

function getInput(){
    //document.body.style.backgroundImage = "url(Rain.jpeg)";
    document.querySelector(".city").innerHTML = "Weather in " +input;
    console.log(input);
}

search.addEventListener("click",getInput());
*/
/*
//const input = document.querySelector("#search-bar").value;
const search = document.getElementById("searchButton");


const apiKey = "8f37e47ffee0da35f60c39891b4f2c21";





/*const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={8f37e47ffee0da35f60c39891b4f2c21}';

fetch(url)
.then(response => response.json())
.then(json => {
    console.log(json);
   });

function weatherImage()
{
    const input = document.querySelector("#search-bar").value;
    document.body.style.backgroundImage = "url(Rain.jpeg)";
    document.querySelector(".city").innerHTML = "Weather in " +input;
    document.querySelector(".temp").innerHTML = "40 <sup>&#8457</sup>";
    document.querySelector(".description").innerHTML = "Rainy";
    document.querySelector(".humidity").innerHTML = "Humidity: 75%";
    document.querySelector(".wind").innerHTML = "Wind speed: 13 km/h";
   // fetch(url);
}
search.addEventListener("click", weatherImage());

*/
/*
const apiKey = "8f37e47ffee0da35f60c39891b4f2c21";
let url = "";
$("#searchButton").click(function(){
    let input = $('#search-bar').val();
    console.log(input);
    let link = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=8f37e47ffee0da35f60c39891b4f2c21";
    
    console.log(url);

    let weatherData = fetch(url)
.then(response => response.json());
    
weatherData.then(x => {
    console.log(x);
})
.catch(console.error);
});
*/
 /*$("#searchButton").click(function(){
     let input = $('#search-bar').val();
     $(".city").html("Weather in " +input);
     /*fetch('https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=8f37e47ffee0da35f60c39891b4f2c21')
     .then(data => data.json())
        .then(data => {
            console.log(data);
            
        })*/

  /*  const weatherData = fetch('https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=8f37e47ffee0da35f60c39891b4f2c21')
    .then(response => response.json());

    weatherData.then(x => {
       console.log(x);
       data+= JSON.stringify(x);
    })
    .catch(console.error);
    console.log(data);
    console.log(input);

    $(".temp").html(6+"<sup>&#8457<sup>");
    $(".description").html("Rainy");
    $(".humidity").html(65+"%");
    $(".wind").html("Wind speed: " + 10 + " mph");
    
 })*/

