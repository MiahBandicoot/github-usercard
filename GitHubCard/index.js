import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const parent = document.querySelector(".cards")
function makeCard(info){
  const div = document.createElement("div")
  const img = document.createElement("img")
  const div1 = document.createElement("div")
  const h3 = document.createElement("h3")
  const puser = document.createElement("p")
  const ploc = document.createElement("p")
  const ppro = document.createElement("p")
  const a = document.createElement("a")
  const pfoll = document.createElement("p")
  const pfolli = document.createElement("p")
  const pbio = document.createElement("p")
  img.src = info.avatar_url
  a.href = info.html_url
  div.appendChild(img)
  div.appendChild(div1)
  div1.appendChild(h3)
  div1.appendChild(puser)
  div1.appendChild(ploc)
  div1.appendChild(ppro)
  div1.appendChild(pfoll)
  div1.appendChild(pfolli)
  div1.appendChild(pbio)
  div.classList.add("div")
  div.className = "card"
  div1.className = "card-info"
  h3.className = "name"
  puser.className = "username"
  h3.textContent = info.name
  puser.textContent = info.login
  ploc.textContent = `location: ${info.location}`
  ppro.textContent = `Profile:`
  a.textContent = info.html_url
  pfoll.textContent = `followers: ${info.followers}`
  pfolli.textContent = `following: ${info.following}`
  pbio.textContent = `Bio: ${info.bio}` 
  ppro.appendChild(a)
return div
}

const targets = [
"tetondan",
"dustinmyers",
"justsml",
"luishrd",
"bigknell",
"MiahBandicoot",
]
targets.forEach((name)=>{
axios.get(`https://api.github.com/users/${name}`)
.then(info => {
const data = makeCard(info.data)
parent.appendChild(data)
})

.catch(error => {
console.log(error)
})
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
