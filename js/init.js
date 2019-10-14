(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// First form Validation

function validateFirstForm() {
  var x = document.forms["firstForm"]["firstN"].value;
  var y = document.forms["firstForm"]["firstE"].value;
  var z = document.forms["firstForm"]["firstP"].value;
  console.log(x,y,z); 
  if (x == "" || y == "" || z=="") {
    alert("Name must be filled out");
    return false;
  }
}

function jith(){
  console.log("hi");
  var x = document.forms["firstForm"]["firstN"].value;
  var y = document.forms["firstForm"]["firstE"].value;
  var z = document.forms["firstForm"]["firstP"].value;
  var a = document.forms["firstForm"]["select"].value;
  console.log(x,y,z); 
  if (x == "" || y == "" || z=="" || a =="") {
    alert("Please fillout the *required details");
  
    return false;
    
  }
}



function modalsubmit(){
  console.log("hi");
  var x = document.forms["form4"]["name"].value;
  var y = document.forms["form4"]["email"].value;
  var z = document.forms["form4"]["phone"].value;
 
  console.log(x,y,z); 
  if (x == "" || y == "" || z=="") {
    alert("Please fillout the *required details");
    event.preventDefault();
    return false;
  }
}

function mainForm_submit(){
  console.log("hi");
  var x = document.forms["mainForm"]["name"].value;
  var y = document.forms["mainForm"]["email"].value;
  var z = document.forms["mainForm"]["phone"].value;
  var a = document.forms["mainForm"]["text"].value;
 
  console.log(x,y,z); 
  if (x == "" || y == "" || z=="" || a=="") {
    alert("Please fillout the *required details");
    return false;
  }
}



function popins(){
  var y = document.forms["firsthard"]["email"].value;
  var z = document.forms["firsthard"]["phone"].value;
  console.log(y,z); 
  if ( y == "" || z=="" ) {
    alert("Please fillout the *required details");
    event.preventDefault();
    return false;

  }
}

function popins1(){
  var y = document.forms["secondhard"]["email"].value;
  var z = document.forms["secondhard"]["phone"].value;
  console.log(y,z); 
  if ( y == "" || z=="" ) {
    alert("Please fillout the *required details");
    event.preventDefault();
    return false;

  }
}
