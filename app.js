const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

geoCode("Tehran", (error, data) => {
    if(error) {
        console.log("Error: ", error);
    }else {
        console.log("Latitude: ", data.latitude);
        console.log("Longitude: ", data.longitude);
        console.log("Location: ", data.location);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        console.log('Error', error)
        console.log('Forecast: ', forecastData)
    })
});

