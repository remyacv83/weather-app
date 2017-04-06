const request = require('request');

var geocodeAddress = (userAddress) => {
var encodedAddres = encodeURIComponent(userAddress);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddres}`,
    json: true
}, (error, response, body) => {
    if(error) {
        console.log('Unable to connect to Google Server');
    }
    else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find a location for the address');
    }
    else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});
}

module.exports = {
    geocodeAddress
};
