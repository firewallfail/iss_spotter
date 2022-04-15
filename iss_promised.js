const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`)
};

const fetchISSFlyOverTimes = function(body) {
  const location = {
    latitude: JSON.parse(body).latitude,
    longitude: JSON.parse(body).longitude
  }
  return request(`http://api.open-notify.org/iss-pass.json?lat=${location.latitude}&lon=${location.longitude}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      let passTimes = JSON.parse(body).response
      return passTimes;
    })
}

module.exports = {
  nextISSTimesForMyLocation
};