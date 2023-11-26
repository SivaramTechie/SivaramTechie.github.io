const btn = document.getElementById("btn");
const username = document.getElementById("username");
const avatar = document.getElementById("avatar");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");

function getInfo(e) {
  e.preventDefault();
  // Get the input value when the button is clicked
  const usernameInput = document.getElementById("usernameInput").value;
  const apiUrl = `https://api.github.com/users/${usernameInput}`;

  // Fetch data from the API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Process the fetched data and display it on the page
      displayUserData(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });
}

// Add event listener to the button to trigger the getInfo function when clicked
btn.addEventListener("click", getInfo);

function displayUserData(userData) {
  // Display the fetched data as needed on the page

  followers.innerHTML = userData.followers + " Followers";
  following.innerHTML = userData.following + " Following";
  repos.innerHTML = userData.public_repos + " Repos";
  bio.innerHTML = userData.bio;
  username.innerHTML = userData.name;
  avatar.src = userData.avatar_url;
}
