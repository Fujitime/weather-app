const apiKey = "YOUR_API_KEY";
function weather(lokasi) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      lokasi +
      "&appid=" +
      apiKey +
      "units=metric"
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("Location :", response.name);
      console.log("Country :", response.sys.country);
      console.log("°С", response.main.temp);
      console.log(
        "-----------",
        response.weather[0].description,
        "-----------"
      );
      console.log(
        "min",
        response.main.temp_min,
        "°С",
        "max",
        response.main.temp_max,
        "°С"
      );
      console.log("Cordinat :", response.wind.speed), "m/s";
      console.log("Clouds", response.clouds.all, "%");
      console.log("Geo Coordinates : ", response.coord.lat, response.coord.lon);
    });
}
