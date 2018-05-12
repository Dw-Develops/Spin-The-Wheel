//Declare the audio file as a variable
	var x = document.getElementById('sound1');
	var y = document.getElementById('sound2');
	var z = document.getElementById('sound3');
	var yes = document.getElementById('sound4');
	var ks = document.getElementById('sound5');
	
	//Hide the spin button and spin invite title when the page loads
	function hide() {
	luck = "";
	  document.getElementById("spin").style.visibility = "hidden"; 
	  document.getElementById("results").style.visibility = "hidden"; 
	  document.getElementById("title").style.visibility = "hidden"; 
	  document.getElementById("ui1").style.visibility = "hidden"; 
	  document.getElementById("postForm").style.visibility = "hidden"; 
	  document.getElementById("ui").style.visibility = "hidden"; 
	  document.getElementById("bucks").style.visibility = "hidden"; 
	  

	}
	
	//click start button
	function start() {
		document.getElementById("ui1").style.visibility = "visible"; 
	    document.getElementById("postForm").style.visibility = "visible"; 
		document.getElementById("start").style.visibility = "hidden"; 
		document.getElementById("ui").style.visibility = "visible"; 
	    ks.play();
	}
	
	//Form Logic
	    //Post email entry to the database
		document.getElementById('postForm').addEventListener('submit', postEmail);
		

		 function postEmail(e) {
		e.preventDefault();

		document.getElementById("spin").style.visibility = "visible"; 
	    //document.getElementById("results").style.visibility = "visible"; 
		document.getElementById("title").style.visibility = "visible";
		document.getElementById("ui1").style.visibility = "hidden"; 
		document.getElementById("postForm").style.visibility = "hidden"; 
	    document.getElementById("bucks").style.visibility = "visible";
		
		var email = document.getElementById('email1').value;
		var params= "email="+email;

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'process.php', true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                console.log(this.responseText);
            }
            xhr.send(params);
			 document.getElementById('bucks').innerHTML = "Site Bucks: " + siteBucks;
			 document.getElementById('ui').innerHTML = "Congratulations! Here's 100 Free Site Bucks!";
        }

	
	// Wheel Logic
	
	//Create an array of prizes
	
	var prizes = [
	   -1,
	   2,
	   5,
	   -5,
	   10,
	   -15,
	   20
	   
	   
		
		
	];
	    //Trigger function when the button is clicked -- Spin the wheel
    var luck = "";
	var siteBucks= 100;
	var bonus = false;
	 
var spinWheel = function() {
        siteBucks = siteBucks - 1;
    //Hide the Spin button so users can't multi press and impede app logic
	document.getElementById("spin").style.visibility = "hidden"; 
	document.getElementById("title").style.visibility = "hidden"; 

  //Create an Empty Variable thats local to this function
  let num = "";
  
    //Generate random number
   num = Math.floor(Math.random() *99);
     console.log(num);
	 
	  
		 if(num > 85) {
		    bonus = true;
		 } else if(num < 85) {
		    bonus = false;
		 } else {
		 
		 }
	    
		//Pause idle game music
		   ks.pause();
   
	//Use if else statements to assign an array position to a 
	//percentage of a generated random number (num)
	  if(num > 0 && num < 45) {
	    // assign value to luck variable
		luck = prizes[0];
	  
	  //Set placeholder text so users know the game is working
	    document.getElementById('ui').innerHTML = "Spinning......";
		   
		//Play audio file
		  x.play();
		  
		// Set a short timer to indicate that the wheel is spinning
	      timer = setTimeout(winner, 5000);
		}
		else if(num > 45 && num < 66) {
		// assign value to luck variable
		luck = prizes[1];
		
	  //Set placeholder text so users know the game is working
	    document.getElementById('ui').innerHTML = "Spinning......";
		    
		//Play audio file
		  x.play();
		  
		// Set a short timer to indicate that the wheel is spinning
	      timer = setTimeout(winner, 5000);
		}
		else if(num > 66 && num < 81) {
		// assign value to luck variable
		luck = prizes[2];
		
	  //Set placeholder text so users know the game is working
	    document.getElementById('ui').innerHTML = "Spinning......";
		    
		//Play audio file
		  x.play();
		  
		// Set a short timer to indicate that the wheel is spinning
	      timer = setTimeout(winner, 5000);
		}
		else if(num > 81 && num < 91) {
		// assign value to luck variable
		luck = prizes[3];
		
	  //Set placeholder text so users know the game is working
	    document.getElementById('ui').innerHTML = "Spinning......";
		    
		//Play audio file
		  x.play();
		  
		// Set a short timer to indicate that the wheel is spinning
	      timer = setTimeout(winner, 5000);
		}
		else if(num > 91 && num < 97) {
		// assign value to luck variable
		luck = prizes[4];
		
	  //Set placeholder text so users know the game is working
	    document.getElementById('ui').innerHTML = "Spinning......";
		    
		//Play audio file
		  x.play();
		  
		// Set a short timer to indicate that the wheel is spinning
	      timer = setTimeout(winner, 5000);
		}
		else if(num > 96 && num < 100) {
		// assign value to luck variable
		luck = prizes[5];
		
	  //Set placeholder text so users know the game is working
	    document.getElementById('ui').innerHTML = "Spinning......";
		   
		//Play audio file
		  x.play();
		  
		// Set a short timer to indicate that the wheel is spinning
	      timer = setTimeout(winner, 5000);
		}
		else {
		    document.getElementById('ui').innerHTML = prizes[6];;
		}
		
		
		
		
		
		
	    
			  //Display spin results
			 function winner() {
			 if(bonus === true && luck > 0) {
			     luck = luck *5;
				 siteBucks = siteBucks + luck;
				 document.getElementById('showBonus').innerHTML = "Bonus Money!";
				 document.getElementById('ui').innerHTML = siteBucks;
				 yes.play();
			 } else {
			     siteBucks = siteBucks + luck;
			 }
			    
			      document.getElementById('bucks').innerHTML = "Site Bucks: " + siteBucks;
			 if(luck < 0) {
			       z.play();
				   document.getElementById('ui').innerHTML = "You Lost " + luck + " Site Bucks!";
			    } else if(luck > 1) {
				    if(bonus === true) {
						yes.play();
						document.getElementById('ui').innerHTML = "You Won " + luck + " Site Bucks!";
					} else {
				y.play();
				document.getElementById('ui').innerHTML = "You Won " + luck + " Site Bucks!";
				} }
			  
                	
                    				
			  }
			  timer = setTimeout(postResults, 6500);
			  //postResults();
}



             //Post results data to the database
    		 function postResults() {
		        document.getElementById('showBonus').innerHTML = " ";
		        document.getElementById("spin").style.visibility = "visible";
                     document.getElementById("title").style.visibility = "visible";	
					 
		var results = luck;
		
		var params= "results="+results;

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'process.php', true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                console.log(this.responseText);
				luck = "";
            }
            xhr.send(params);
        }
