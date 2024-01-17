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
    nameElement.innerText = name;
    imageElement.src = image;
  }
});
