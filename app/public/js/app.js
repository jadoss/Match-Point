// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9IENJxY48gZjiBjAxB7AELs1ytoqJay8",
    authDomain: "match-point-project.firebaseapp.com",
    databaseURL: "https://match-point-project.firebaseio.com",
    projectId: "match-point-project",
    storageBucket: "match-point-project.appspot.com",
    messagingSenderId: "157562315014"
};

firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var email = "";
var password = "";
var repeatPassword="";

$("addUser").on("click",function(){
  name = $("#nameInput").val().trim();
  email = $("#emailInput").val().trim();
  password = $("#passwordInput").val().trim();
  repeatPassword= $("#repeatPasswordInput").val().trim();

  firebase.database().ref().push({
    name: name,
    email: email,
    password: password,
    dateAdded:firebase.database.ServerValue.TIMESTAMP
  })

});


$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});