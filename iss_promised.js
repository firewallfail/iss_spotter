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

const printPassTimes = function(passTimes) {
  for (let time of passTimes) {
    let readableTime = new Date(time.risetime * 1000);
    let duration = time.duration;
    console.log(`Next pass at ${readableTime} for ${duration} seconds!`);
  }
}

module.exports = {
  nextISSTimesForMyLocation,
  printPassTimes
};