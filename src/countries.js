import debounce from "lodash.debounce";
import Notiflix from 'notiflix';

import fetchCountry from "./fetchCountries.js"
import listOneCountries from "./listOneCountries.js";
import listEveryCountries from "./listEveryCountries.js";
import refs from "./refs.js"
const {searchBox, countryList} = refs

searchBox.addEventListener('input', debounce(() => {
    const name = searchBox.value.trim()
    fetchCountry(name).then(res=>showCountry(res)).catch( (error) => {
    showError()
})
}, 300))

function showCountry(listCountries) {
       let template = ""
  if (listCountries.length > 10) {
       clearValues()
       Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (listCountries.length < 10 && listCountries.length > 1) {
         clearValues()
         listCountries.forEach((e) => {
         template = template + listEveryCountries(e)
        }) 
         countryList.innerHTML = template;
    } else if (listCountries.length === 1) {
         clearValues()
         listCountries.forEach((e) => {
         template = template + listOneCountries(e);
       })
         countryList.innerHTML = template;
    } 
}

function clearValues(){
countryList.innerHTML = ""
}

function showError() {
     return Notiflix.Notify.failure('Oops, there is no country with that name');
}













