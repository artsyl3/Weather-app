const postman = require('postman-request');

const forecast = (latitude, longitude, callBack) => {
    const url = `http://api.weatherstack.com/current?access_key=cc4e253f5df50564c454e6fec5be3193&query=${latitude},${longitude}`;
    postman({url, json:true} , (error, {body}) =>{
        const data = body.current;
        if(error){
            callBack("Error");
        }else if(body.success === false){
            callBack("Your request was not successful");
        }else{
             callBack(undefined, data.weather_descriptions[0] + ". it is currently " + data.temperature + " degress out. It feels like " + data.feelslike + " degress out.");
        }
    });
}

module.exports = forecast;