const RequestCountry = (apiURL, countryFields) => {
  return fetch(apiURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      let countryData = [];

      data.forEach(fullCountry => {
        let country = {};
        for (let key in countryFields) {
          country[key] = fullCountry[countryFields[key]];
        }
        countryData.push(country);
      });

      return countryData;
    })
    .catch(err => {
      console.warn(err, 'apiURL:', apiURL);
      throw err;
    });
};

export default RequestCountry;
