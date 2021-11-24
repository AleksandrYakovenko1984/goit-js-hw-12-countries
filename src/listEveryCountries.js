export default function listEveryCountries(country) {
  
    return `<div>
    <ul>
    <li><img src="${country.flags.svg}" width="20" height="18">  <span>${country.name.official}</span></li>
    </ul>
           </div>`  
}