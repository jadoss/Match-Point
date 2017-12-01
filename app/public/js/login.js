
var config = {
    apiKey: "AIzaSyBwQX4zhQBOMWEuZX-gnoG8ZTi6r1T0HuM",
    authDomain: "match-point-87dbf.firebaseapp.com",
    databaseURL: "https://match-point-87dbf.firebaseio.com",
    projectId: "match-point-87dbf",
    storageBucket: "match-point-87dbf.appspot.com",
    messagingSenderId: "312168236054"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var email = "";
var password = "";
var repeatPassword="";

var user;

firebase.auth().onAuthStateChanged(function(signedInUser) {
  if (signedInUser) {
    // User is signed in.
    user = signedInUser;
    window.location.pathname = 'profile.html';
  } else {
    // No user is signed in.
  }
});