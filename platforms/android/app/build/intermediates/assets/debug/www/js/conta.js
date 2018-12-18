firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    
    var user = firebase.auth().currentUser;

  } else {
    // No user is signed in.

    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(user => {
      // Sign in success
      window.location = 'index.html';

      }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Erro : " + errorMessage);
      })

}

function create_account(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Erro : " + errorMessage);

    // ...
  });

}

function logout(){

  firebase.auth().signOut().then(function() {
      // Sign-out successful.
        window.location = 'login.html';

      }).catch(function(error) {
      // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Erro : " + errorMessage);
    });
}

function forgot_pass(){

  var auth = firebase.auth();
  var userEmail = document.getElementById("email_field").value;

  auth.sendPasswordResetEmail(userEmail).then(function() {
      alert('Um link foi enviado para seu e-mail.');
  }).catch(function(error) {
      alert('Um erro ocorreu. Insira o e-mail e tente novamente.');
  });

}
