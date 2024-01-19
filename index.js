console.log("Lukas var her!");

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-button");
  const emailInput = document.getElementById("email-input");

  submitButton.addEventListener("click", function () {
    const enteredEmail = emailInput.value.trim().toLowerCase();

    if (enteredEmail === "") {
      alert("Please enter an email.");
      return;
    }

    // Load the JSON data
    fetch("people.json")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((person) => person.email === enteredEmail);

        if (user) {
          // Display the user's name and image
          displayUserInfo(user.name, user.image);
        } else {
          alert("Email not found. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  function hideLogin() {
    const login = document.getElementById("login");
    login.classList.add("hidden");
  }

  function displayUserInfo(name, image) {
    // Replace this with your logic to display the user information
    console.log("Name: ", name);
    console.log("Image: ", image);
    hideLogin();
    const nameElement = document.getElementById("name");
    const imageElement = document.getElementById("personImage");
    const passwordElement = document.getElementById("password");
    nameElement.innerText = name;
    imageElement.src = image;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const submitButtonPassword = document.getElementById(
    "submit-button-password"
  );
  const passwordInput = document.getElementById("password-input");

  submitButtonPassword.addEventListener("click", function () {
    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (enteredPassword === "") {
      alert("Please enter an password.");
      return;
    }

    // Load the JSON data
    fetch("people.json")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((person) => person.password === enteredPassword);

        if (user) {
          // Display the user's name and image
          displayUserLogin(user.name, user.image);
        } else {
          alert("Email not found. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
});
function hidePasswordLogin() {
  const login = document.getElementById("profile");
  login.classList.add("hidden");
}

function displayUserLogin(name, image) {
  // Replace this with your logic to display the user information
  console.log("Name: ", name);
  hidePasswordLogin();
  const nameElement = document.getElementById("nameLoggedIn");
  const imageElement = document.getElementById("personImageLoggedIn");
  const loggedInElement = document.getElementById("loggedIn");
  nameElement.innerText = name + " is logged in";
  imageElement.src = image;
  loggedInElement.classList.remove("hidden");
}
