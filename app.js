const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');


forecast(40.78, -73.97, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })



geoCode("Karaj", (error, data) => {
    if(error) {
        console.log("Error: ", error);
    }else {
        console.log("Latitude: ", data.latitude);
        console.log("Longitude: ", data.longitude);
        console.log("Location: ", data.location);
    }
});

