const postman = require('postman-request');

const geoCode = (address, callBack) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2hhbmJhcmkyIiwiYSI6ImNtMmc0Y3drdjBobnIyanBmd3F2NjdtMW8ifQ.SVzv1P-BreOYxZ0XU4PZ4A&limit=1';

    postman({url, json:true}, (error, {body}) => {
        if(error) {
            callBack("unexpected error")
        } else if(body.features.length === 0) {
            callBack("There is no city in the world with that name", undefined)
        } else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const location = body.features[0].place_name;
            callBack(undefined, {latitude, longitude, location});
        }
    })
}


module.exports = geoCode;