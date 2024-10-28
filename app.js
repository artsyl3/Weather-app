const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

geoCode(address, (error, { latitude, longitude , location } = {} ) => {
    if(error) {
       return console.log("Error: ", error);
    }else if(!address) {
        return console.log("Please provide an address");
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return console.log('Error: ', error)
        }
        console.log(location)
        console.log(forecastData)
    })
});

