<?php
$conn = mysqli_connect('localhost', 'root', '', 'test');

echo 'Processing........';

// Check for a Post variable
if(isset($_POST['email'])) {
$email = mysqli_real_escape_string($conn, $_POST['email']);

    echo 'POST: Your email is '. $_POST['email'];
	

	$query = "INSERT INTO users(email) VALUES('$email')";
	

	  if(mysqli_query($conn, $query)) {
	  	  echo 'Email Added......';
		  
	  } else {
	  	  echo 'Error: '.mysqli_error($conn);
	  }

}

// Check for a POST variable
if(isset($_POST['results'])) {
$results = mysqli_real_escape_string($conn, $_POST['results']);
    echo 'POST: Your prize is '. $_POST['results'];

	$query = "INSERT INTO users(results) VALUES('$results')";

	  if(mysqli_query($conn, $query)) {
	  	  echo 'Prize Results Added......';
	  } else {
	  	  echo 'Error: '.mysqli_error($conn);
	  }

}


