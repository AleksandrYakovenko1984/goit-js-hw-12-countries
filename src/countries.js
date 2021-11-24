import debounce from "lodash.debounce";
import Notiflix from 'notiflix';
import fetchCountry from "./fetchCountries.js"

const searchBox = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')


searchBox.addEventListener('input', debounce(() => {
    const name = searchBox.value.trim()
    fetchCountry(name).then(res=>showCountry(res)).catch( (error) => {
  console.error(error);
  showError()
})
}, 300))

function showCountry(listCountries) {
    let template = ""
    if (listCountries.length > 10) {
       Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    // countryList.innerHTML = template;
    } else if (listCountries.length < 10 && listCountries.length > 1) {
         listCountries.forEach((e) => {
         template = template + listEveryCountries(e)
        }) 
         
         console.log(template);
         countryList.innerHTML = template;
       
    } else if (listCountries.length === 1) {
         listCountries.forEach((e) => {
         template = template + listOneCountries(e);
    
       })
         countryList.innerHTML = template;
    } 
}
function showError() {
 

     return Notiflix.Notify.failure('Oops, there is no country with that name');
}

function listEveryCountries(country) {
  
    return `<div>
    <ul>
    <li><img src="${country.flags.svg}" width="20" height="18">  <span>${country.name.official}</span></li>
    </ul>
           </div>`  
}

function listOneCountries(country) {
  return `<div>
    <ul class = "animate__animated animate__pulse oneCountry">
    <li><img src="${country.flags.svg}" width="28" height="25">  <span> ${country.name.official}</span></li>
    <li> capital:    ${country.capital}</li>
    <li> population: ${country.population}</li>
    <li> languages:  ${lang(country)}</li>
    </ul>
          </div>`
} 

function lang(country) {
  console.log(country.languages);
  const keys = Object.values(country.languages);
  console.log(keys);
  return keys
}






