


function validate(){
  var pass1 = document.getElementById('pass1').value;
  var pass2 = document.getElementById('pass2').value;
  if(pass1.value && pass2.value){
    if(pass1.value != pass2.value){
      alert("Passwords do not match!");
    }
    if(pass1.value.length < 8 || pass2.value < 8){
      alert("Password is less than 8 characters!");
    }
  }
}
