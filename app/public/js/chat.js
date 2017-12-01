  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzntIelILtJ6EQLh-9YSfv0JoiC17wavA",
    authDomain: "chatroom-b1b19.firebaseapp.com",
    databaseURL: "https://chatroom-b1b19.firebaseio.com",
    projectId: "chatroom-b1b19",
    storageBucket: "chatroom-b1b19.appspot.com",
    messagingSenderId: "480756105485"
  };
  firebase.initializeApp(config);

  var chatMessages = firebase.database();

$("#send").on("click", function(){
  var message = $("#message-input").val().trim();

  console.log(message);

  var newMessage = {
    message: message
  }
  chatMessages.ref().push(newMessage); //IMPORTANT

  $("#message-input").val("");
  return false;
})

chatMessages.ref().on("child_added", function(snapshot){
  var message = snapshot.val().message;

  $(".messages").append(message+"<br>");
})