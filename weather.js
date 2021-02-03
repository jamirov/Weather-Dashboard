var myKey = "6dffc89cea0871519ae20ba624a3e047";

var city = $('#city');

var cityCount = 0;

$("#search-button").click(function(event){
    event.preventDefault();
    
    var cityName = city.val();
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=6dffc89cea0871519ae20ba624a3e047&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var cityOut = data.city.name;
        $("#city-name").html(cityOut);
        var currnentDayFull = data.list[0].dt_txt
        var currentDay = currnentDayFull.slice(0,10);
        $("#currentDay").html(currentDay);
        var icon = data.list[0].weather[0].icon;
        $("#current-pic").attr("src","weatherIcons/" + icon + "@2x.png");
        var tempOut = data.list[0].main.temp;
        $("#temperature").html("Temperature: " + tempOut + " &#8457.");
        var humidOut = data.list[0].main.humidity;
        $("#humidity").html("Humidity: " + humidOut + " &#37.");
        var windSpeed = data.list[0].wind.speed;
        $("#wind-speed").html("Wind speed: " + windSpeed + " MPH.");

        $("#fiveDay").html("5-Day Forecast")

        var firstDay = data.list[11].dt_txt.slice(0,10);
        $("#firstDay").html(firstDay);
        var firstDayIcon = data.list[13].weather[0].icon;
        $("#day1Icon").attr("src","weatherIcons/" + firstDayIcon + "@2x.png")
        var firstdayTemp = data.list[2].main.temp
        $("#temp1").html("Temp: " + firstdayTemp + " &#8457.");
        var fisrtDayHumid = data.list[11].main.humidity;
        $("#humid1").html("Humidity: " + fisrtDayHumid + " &#37.");

        var secondDay = data.list[19].dt_txt.slice(0,10);
        $("#secondDay").html(secondDay);
        var secondDayIcon = data.list[20].weather[0].icon
        $("#day2Icon").attr("src","weatherIcons/" + secondDayIcon + "@2x.png")
        var secondDayTemp = data.list[19].main.temp;
        $("#temp2").html("Temp: " + secondDayTemp + " &#8457.");
        var secondDayHumid = data.list[19].main.humidity;
        $("#humid2").html("Humidity: " + secondDayHumid + " &#37.");

        var thirdDay = data.list[27].dt_txt.slice(0,10);
        $("#thirdDay").html(thirdDay);
        var thirdDayIcon = data.list[27].weather[0].icon;
        $("#day3Icon").attr("src","weatherIcons/" + thirdDayIcon + "@2x.png")
        var thirdDayTemp = data.list[27].main.temp;
        $("#temp3").html("Temp: " + thirdDayTemp + " &#8457.");
        var thirdDayHumid = data.list[27].main.humidity;
        $("#humid3").html("Humidity: " + thirdDayHumid + " &#37.");

        var fourthDay = data.list[35].dt_txt.slice(0,10);
        $("#fourthDay").html(fourthDay);
        var fourthDayIcon = data.list[35].weather[0].icon;
        $("#day4Icon").attr("src","weatherIcons/" + fourthDayIcon + "@2x.png")
        var fourthDayTemp = data.list[35].main.temp;
        $("#temp4").html("Temp: " + fourthDayTemp + " &#8457.");
        var fourthDayHumid = data.list[35].main.humidity;
        $("#humid4").html("Humidity: " + fourthDayHumid + " &#37.");

        var fifthDay = data.list[39].dt_txt.slice(0,10);
        $("#fifthDay").html(fifthDay);
        var fifthDayIcon = data.list[39].weather[0].icon;
        $("#day5Icon").attr("src","weatherIcons/" + fifthDayIcon + "@2x.png")
        var fifthDayTemp = data.list[39].main.temp;
        $("#temp5").html("Temp: " + fifthDayTemp + " &#8457.");
        var fifthDayHumid = data.list[39].main.humidity;
        $("#humid5").html("Humidity: " + fifthDayHumid + " &#37.");

    });
    
    localStorage.setItem(cityCount,cityName);
    var newLi = $("<li>");
    newLi.html(localStorage.getItem(cityCount));
    $(".history").append(newLi)
    cityCount++;

$("#city").val("");

});

for (var i = 0; i < localStorage.length; i++){
    var newLi = $("<li>");
    newLi.html(localStorage.getItem([i]))
    $(".history").append(newLi)
};



