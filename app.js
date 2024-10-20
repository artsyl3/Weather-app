const postman = require('postman-request');


const url = 'http://api.weatherstack.com/current?access_key=123b85c29987d638ffa8a55e92a94a40&query=Tehran&units=f';

postman({url:url, json:true} , (error, response) =>{
    const data = response.body.current;
    if(error){
        return console.log(error);
    }else{
        console.log(data.weather_descriptions[0] + ". it is currently " + data.temperature + " degress out. It feels like " + data.feelslike + " degress out.");
    }
});

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2hhbmJhcmkyIiwiYSI6ImNtMmc0Y3drdjBobnIyanBmd3F2NjdtMW8ifQ.SVzv1P-BreOYxZ0XU4PZ4A&limit=1';

postman({url: geocodeUrl , json:true}, (error, response) => {
    const data2 = response;
    if(error) {
        return console.log(error);
    }else {
        const latitude = data2.body.features[0].center[1];
        const longitude = data2.body.features[0].center[0];
        return console.log(latitude, longitude);
    }
})