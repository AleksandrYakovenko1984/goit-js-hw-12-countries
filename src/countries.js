import debounce from "lodash.debounce";
import fetchCountry from "./fetchCountries.js"
const searchBox = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')


searchBox.addEventListener('input', debounce(() => {
    const name = searchBox.value.trim()
    fetchCountry(name).then(res=>showCountry(res)).catch()
}, 300))

function showCountry(listCountries) {
    let template = ""
    if (listCountries.length > 10) {
    template = "Too many matches found. Please enter a more specific name.";
    countryList.innerHTML = template;
    } else if (listCountries.length < 10 && listCountries.length > 1) {
        listCountries.forEach((e) => {
            template = template + listEveryCountries(e)
        }) 
        console.log(111);
        console.log(template);
        countryList.innerHTML = template;
       
    } else if (listCountries.length === 1) {
       listCountries.forEach((e) => {
         template = template + listOneCountries(e);
     
       })
     
      countryList.innerHTML = template;
    }
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
  <ul>
    <li><img src="${country.flags.svg}" width="20" height="18">  <span> ${country.name.official}</span></li>
    <li> capital:    ${country.capital}</li>
    <li> population: ${country.population}</li>
    <li> languages:  ${country.languages}</li>
  </ul>
</div>`
    
} 

function lang(country) {
  let language = "";
    country.languages.forEach((el) => { "lang:", el })
  language = language + el
}


