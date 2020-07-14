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

let followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'hernandezm-dev'
];



const cards = document.querySelector('.cards')
followersArray.forEach( gitUser =>{
  const userGit = `https://api.github.com/users/${gitUser}`
  axios.get(userGit)
    .then(function(res){
      let data = res.data;
      let card = gitCardMaker(data)
      cards.appendChild(card)
      // console.log(data)
    })
    .catch(function(error){
      debugger
      console.log(error)
    })
})

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

function gitCardMaker(data){
  const gitCard = document.createElement('div')
  const img = document.createElement('img')
  const info = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('h3')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  const imgURL = data.avatar_url

  name.classList.add('name')
  gitCard.classList.add('card')
  img.src = imgURL;
  info.classList.add('card-info')
  userName.classList.add('username')
  address.href = data.html_url

  name.textContent = data.name
  userName.textContent = data.login
  location.textContent = data.location
  address.textContent = `Profile ${data.html_url}`
  followers.textContent =`Followers: ${data.followers}`
  following.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`

  gitCard.appendChild(img);
  gitCard.appendChild(info)

  info.appendChild(name)
  info.appendChild(userName)
  info.appendChild(location)
  info.appendChild(profile)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)

  profile.appendChild(address)

  console.log(gitCard)
  return gitCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
