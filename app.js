const postman = require('postman-request');
const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');


forecast(-75.7088, 44.1545, (error, data) => {
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

