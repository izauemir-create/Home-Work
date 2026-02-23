// class User {
//   constructor(login, password, username) {
//     this.login = login;
//     this.password = password;
//     this.username = username;
//   }
// }
//
// const users = [
//   new User("White__Rabbit", "12.04.1961", "Alexander the Great"),
//   new User("White__crow", "04.04.1968", "Gaius Julius Caesar"),
// ]
//
// document.getElementById("loginBtn").addEventListener("click", function() {
//   const loginInput = document.getElementById("login").value;
//   const passwordInput = document.getElementById("password").value;
//
//   const foundUser = users.find(function(user) {
//     return user.login === loginInput && user.password === passwordInput;
//   });
//
//   if (foundUser) {
//     Swal.fire({ icon: "success", title: "Hi, " + foundUser.username + "!" })
//   } else {
//     Swal.fire({ icon: "error", title: "Error" })
//   }
// });
//
//
class User {
  constructor(login, password, username) {
    this.login = login;
    this.password = password;
    this.username = username;
  }
}

const users = [
  new User("The_Last_Frontier", "356 BC—323 BC", "Alexander the Great"),
  new User("White_Horse", "100 BC—44 BC", "Gaius Julius Caesar"),
];

document.getElementById("loginBtn").addEventListener("click", function() {
  const loginInput = document.getElementById("login").value;
  const passwordInput = document.getElementById("password").value;

  const foundUser = users.find(function(user) {
    return user.login === loginInput && user.password === passwordInput;
  });

  if (foundUser) {
    Swal.fire({
      icon: "success",
      title: "Welcome!",
      text: "Greetings, " + foundUser.username + "!",
      background: "#0d0b08",
      color: "#e8dcc8",
      iconColor: "#d4af37",
      confirmButtonColor: "#d4af37",
      confirmButtonText: "Enter the Hall",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Access Denied",
      text: "Invalid login or password.",
      background: "#0d0b08",
      color: "#e8dcc8",
      iconColor: "#c0392b",
      confirmButtonColor: "#d4af37",
    });
  }
});

// Enter по клавише
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") document.getElementById("loginBtn").click();
});