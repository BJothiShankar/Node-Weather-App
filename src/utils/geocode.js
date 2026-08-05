import request from "postman-request";

const geocode = (address, callback) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address,
  )}&format=json&limit=1`;

  request(
    { url, json: true, headers: { "User-Agent": "weather-app" } },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to location services!", undefined);
      } else if (body.length === 0) {
        callback("Unable to find location. Try another search.", undefined);
      } else {
        callback(undefined, {
          latitude: body[0].lat,
          longitude: body[0].lon,
          location: body[0].display_name,
        });
      }
    },
  );
};

export default geocode;
