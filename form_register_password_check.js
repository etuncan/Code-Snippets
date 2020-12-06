//Password Check javascript snippet for registration html form
console.log("working");
function passwordCheck(){
	var initial=document.getElementById("pwd").value;
		//gets Password value
	var check=document.getElementById("repwd").value;
		//gets Retyped Password value
	var btn=document.getElementById("submit");
		//gets submit button
	console.log("checking");
	if(initial==check){
		btn.disabled=false;
	}
	else{
		btn.disabled=true;
	}
}