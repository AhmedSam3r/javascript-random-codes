// Task 4: get the neigher countries of Columbia
const axios = require('axios');

const fetchCountry = async (alpha3Code) => {
    try {
      const res = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
      );
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCountryAndNeighbors = async () => {
    const columbia = await fetchCountry("col");
  
    console.log(columbia);
  };
  
  fetchCountryAndNeighbors();