const postman = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=123b85c29987d638ffa8a55e92a94a40&query=Tehran';

postman({url:url} , function(error, response){
    const data = response.body;
    if(error){
        return console.log(error);
    }else{
        console.log(JSON.parse(data));
    }
})