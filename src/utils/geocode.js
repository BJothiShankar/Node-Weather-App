import request from "postman-request";

const geocode = (address, callback) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address,
  )}&format=json&limit=1`;

  request(
    {
      url,
      json: true,
      headers: {
        "User-Agent": "Node-Weather-App/1.0",
      },
    },
    (error, response) => {
      if (error) {
        callback("Unable to connect to location services!", undefined);
      } else if (!response.body || response.body.length === 0) {
        callback("Unable to find location. Try another search.", undefined);
      } else {
        callback(undefined, {
          latitude: response.body[0].lat,
          longitude: response.body[0].lon,
          location: response.body[0].display_name,
        });
      }
    },
  );
};

export default geocode;
