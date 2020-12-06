/*Function to make html input tag for password show input*/

function showPassword(){
//Function declaration of showPassword	
	var pass=document.getElementById("showpass");
	//creates var for checkbox
	if(pass.type==="password"){
		pass.type="text";
	}
	//change input parameter to text
	else{
		pass.type="password";
	}
}