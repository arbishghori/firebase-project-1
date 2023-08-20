document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter a username and password.");
      return;
    }
    if (username === "admin" && password === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "user.html";
    }
  });


// const mainLoginButton = document.getElementById('main-login-button');

// mainLoginButton.addEventListener('click', redirectToUserPanel);

// function redirectToUserPanel() {

//   window.location.href = 'user.html';
// }


//   function redirectToLogin(){
//     window.location.href="user.html";
//   }

//   <iframe src="user.html" frameborder="0" id="user"></iframe>