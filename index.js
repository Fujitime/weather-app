const apiKey = "YOUR_API_KEY";
function weather(location) {
  try {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&appid=" +
      apiKey +
      "&units=metric";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Location:", data.name);
        console.log("Country:", data.sys.country);
        console.log("Temperature:", data.main.temp + "°С");
        console.log("-----------", data.weather[0].description, "-----------");
        console.log(
          "Min:",
          data.main.temp_min,
          "°С",
          "Max:",
          data.main.temp_max,
          "°С"
        );
        console.log("Wind Speed:", data.wind.speed, "m/s");
        console.log("Clouds:", data.clouds.all, "%");
        console.log(
          "Geo Coordinates:",
          data.coord.lat,
          data.coord.lon
        );
      });
  } catch (error) {
    console.error("Error:", error);
  }
}

