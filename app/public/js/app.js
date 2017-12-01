
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
    ;
  } else {
    // No user is signed in.
  }
});

//authentication is the next set-up for DB 


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