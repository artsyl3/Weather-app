const postman = require('postman-request');

const forecast = (latitude, longitude, callBack) => {
    const url = `http://api.weatherstack.com/current?access_key=cc4e253f5df50564c454e6fec5be3193&query=${latitude},${longitude}`;
    postman({url:url, json:true} , (error, response) =>{
        const data = response.body.current;
        if(error){
            callBack(console.log("Error"));
        }else if(response.body.success === false){
            callBack(console.log("Your request was not successful"));
        }else{
             callBack(console.log(data.weather_descriptions[0] + ". it is currently " + data.temperature + " degress out. It feels like " + data.feelslike + " degress out."));
        }
    });
}

module.exports = forecast;