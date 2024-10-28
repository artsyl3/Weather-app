const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');
s
const address = process.argv[2];

geoCode(address, (error, data) => {
    if(error) {
       return console.log("Error: ", error);
    }else if(!address) {
        return console.log("Please provide an address");
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log('Error: ', error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
});

