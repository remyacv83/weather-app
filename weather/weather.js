const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/387fbfaff6ba03033c5078ab936b7d0d/${lat},${lng}`,
        json: true
    } , (error,response, body) => {
        if(!error && response.statusCode === 200) {
            // callback(`The temp in Philadelphia is ${body.currently.temperature} F. But it feels like ${body.currently.apparentTemperature} F.`);
            callback(undefined, {
                current_temperature: body.currently.temperature,
                apparent_temp: body.currently.apparentTemperature,
            });
        }
        else {
            callback('Unable to fetch weather');
        }

    });
};

module.exports.getWeather = getWeather;
