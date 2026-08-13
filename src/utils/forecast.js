import request from "postman-request";

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&temperature_unit=fahrenheit`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback(body.reason, undefined);
    } else {
      callback(
        undefined,
        "The current temperature is " +
          body.current.temperature_2m +
          " degrees. It feels like " +
          body.current.apparent_temperature +
          " degrees. The humidity is " +
          body.current.relative_humidity_2m +
          "%.",
      );
    }
  });
};

export default forecast;
