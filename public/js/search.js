var searcher = document.getElementById('search');
var submitBtn = document.getElementById('searchBtn');

// var searchValue = $('#searchInput').val();

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'df1d359eecmshfc7b3831cf5ac7ep14dfaejsn8e6b2021a822',
    'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com',
  },
};
function search() {
  const radius = 'radius=25';
  const trailAPI =
    'https://trailapi-trailapi.p.rapidapi.com/activity/?' +
    'lat=' +
    '37' +
    '&lon=' +
    '121' +
    '&' +
    // limit +
    // '&' +
    radius +
    '&' +
    'q-activities_activity_type_name_eq=mountain%20biking';
  console.log(trailAPI);

  fetch(trailAPI, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

submitBtn.addEventListener('click', search);

// fetch(
//   'https://trailapi-trailapi.p.rapidapi.com/activity/?lat=34.1&limit=25&lon=-105.2&radius=25&q-activities_activity_type_name_eq=mountain%20biking',
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

//   var fetch = require('node-fetch');
// var requestOptions = {
//   method: 'GET',
// };

// fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=5a24470a7ccc4f68933fcf2cb03816c9", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// API key: 5a24470a7ccc4f68933fcf2cb03816c9
