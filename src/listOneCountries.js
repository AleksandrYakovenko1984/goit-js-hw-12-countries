export default function listOneCountries(country) {
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