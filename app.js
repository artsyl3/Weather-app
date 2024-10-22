const postman = require('postman-request');


// const url = 'http://api.weatherstack.com/current?access_key=cc4e253f5df50564c454e6fec5be3193&query=Tehran&units=f';

// postman({url:url, json:true} , (error, response) =>{
//     const data = response.body;
//     if(error){
//         return console.log("Nemidonam chi shode");
//     }else{
//         console.log(data.weather_descriptions[0] + ". it is currently " + data.temperature + " degress out. It feels like " + data.feelslike + " degress out.");
//         console.log(data);
//     }
// });

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json.json?access_token=pk.eyJ1IjoiZ2hhbmJhcmkyIiwiYSI6ImNtMmc0Y3drdjBobnIyanBmd3F2NjdtMW8ifQ.SVzv1P-BreOYxZ0XU4PZ4A&limit=1';

postman({url: geocodeUrl , json:true}, (error, response) => {
    if(error) {
        return console.log("No internet connection");
    } else if (response.body.features.length === 0){
        console.log("You have Error")
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        return console.log(latitude, longitude);
    }
})

