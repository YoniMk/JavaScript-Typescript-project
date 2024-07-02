document.getElementById("loginForm").addEventListener("submit", function(event) { event.preventDefault()

var userName = document.getElementById("userName").value.trim();
var password = document.getElementById("password").value.trim();


if((userName === "admin" && password ==="12345") || (userName === "user123" && password === "123")) {
    alert("Login Successfull")
 }
  else {
        alert("The password or username doesn't match.Please try again!");
    }
});