const axios = require('axios');

const fetchCountryData = async () => {
    const response = await axios.get('https://api.first.org/data/v1/countries');
    console.log(response);
    const country = response.data;
    console.log(country);
}

fetchCountryData();