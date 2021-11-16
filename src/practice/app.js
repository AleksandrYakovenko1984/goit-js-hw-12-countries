import  debounce  from "lodash.debounce";
// const searchBox = document.querySelector('.searchBox');
const searchBox = document.querySelector('.searchBox > input');
const profileContainer = document.querySelector('.profile-section')

// searchBox.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(searchBox.elements.login.value);
//     const login = searchBox.elements.login.value
// fetchUser(login)
//         .then(showProfile)
//     searchBox.reset()
// })

searchBox.addEventListener('input', debounce(() => {
    const login = searchBox.value
    fetchUser(login)
        .then(showProfile).catch(showError)
}, 300))


function showError(error) {
    profileContainer.innerHTML = 'Упс, что-то пошло не так. Попробуйте ещё раз'
}

function showProfile({ public_repos,
    bio,
    name,
    avatar_url,
    followers, following }) {
    
    profileContainer.innerHTML = `<div class="profile">
       <img src="${avatar_url}" class="avatar" alt="user avatar" width="120" height="120" />
      <div class="content">
      ${name ?`<h1 class="name">${name}</h1>`: ''}
        ${bio? `<p class="bio">${bio}</p>`: ''}
        <ul class="stats">
        <li>Followers: <span>${followers}</span></li>
        <li>Following: <span>${following}</span></li>
        <li>Repos: <span>${public_repos}</span></li>
        </ul>
        </div>
        </div> `
    
}

function fetchUser(login) {
    return fetch(`https://api.github.com/users/${login}`).then(response => {
         if (!response.ok) {
           throw Error(response.statusText)
       }
   return   response.json()
    })
   
}


 
 
 

