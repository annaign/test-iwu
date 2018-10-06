import './scss/styles.scss';
import { apiURL, countryFields } from './js/constants';
import RequestCountry from './js/api/requestCountry';

const CountrySuggest = (country, apiURL, countryFields) => {
  RequestCountry(apiURL + country.toLowerCase(), countryFields)
    .then(data => {
      ShowCountry(data);
    })
    .catch(err => {
      //Доделать реакцию, если страны с таким названием нет
      ShowCountry([]);
    });
};

const ShowCountry = arrCountry => {
  const inputCountry = document.getElementById('js-inputCountry');
  const countryList = inputCountry.parentNode.querySelector('.country-list');
  countryList.innerHTML = '';

  arrCountry.forEach(element => {
    const containerLi = document.createElement('li');
    containerLi.className = 'country-item';

    const containerImg = document.createElement('img');
    containerImg.className = 'country-flag';
    containerImg.src = element.flag;
    containerImg.alt = 'flag';

    const containerText = document.createElement('span');
    containerText.className = 'country-text';
    containerText.innerText = ' ' + element.country;

    containerLi.appendChild(containerImg);
    containerLi.appendChild(containerText);
    countryList.appendChild(containerLi);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const inputCountry = document.getElementById('js-inputCountry');

  inputCountry.addEventListener('input', event => {
    const country = event.target.value;

    if (!country.match(/^[a-zA-Z]+$/)) {
      event.target.value = country.substring(0, country.length - 1);
      return;
    }

    CountrySuggest(country, apiURL, countryFields);
  });
});
