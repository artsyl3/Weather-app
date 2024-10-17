const postman = require('postman-request');

const my = "ahaha";
const url = 'http://api.weatherstack.com/current?access_key=123b85c29987d638ffa8a55e92a94a40&query=Tehran&units=f';

postman({url:url, json:true} , (error, response) =>{
    const data = response.body.current;
    if(error){
        return console.log(error);
    }else{
        console.log(data.weather_descriptions[0] + ". it is currently " + data.temperature + " degress out. It feels like " + data.feelslike + " degress out.");
    }
});

