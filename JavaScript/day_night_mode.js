/*A function for a simple day/night mode button that alters text color and background color
This function assumes the use of a html page defined listener*/ 

function dayNightMode(){
	let backgroundList=document.querySelectorAll(".backdrop_DN");
	let textList=document.querySelectorAll(".text_DN");
	const ICON=document.getElementById("icon_DN");
	const COLOR_ONE="#ffffff";
	const COLOR_TWO="#000000";

	
	if(textList[0].style.color===COLOR_ONE){
		backgroundList.forEach((item)=>{item.style.background-color=COLOR_ONE});
		textList.forEach((item)=>{item.style.color=COLOR_TWO});
		ICON.src="icon_dn_day.jpg";
	}
	else{
		backgroundList.forEach((item)=>{item.style.background-color=COLOR_TWO});
		textList.forEach((item)=>{item.style.color=COLOR_ONE});
		ICON.src="icon_dn_night.jpg";
	}
} 