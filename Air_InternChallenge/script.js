//function after form completion: 
    //alerts user completing form
    //disables the submit button
    //changes background color style to disabled

function onSubmit() {
    alert("You have successfully created an account!");
    document.getElementById("submitbutton").disabled = true;
    document.getElementById("submitbutton").style.backgroundColor = "#EFEFEF";
}

//function to view the password when you click on the eye icon
function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}




