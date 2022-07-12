//Javascript for a SVG button that adjusts the line height of target via class
document.addEventListener("DOMContentLoaded",lineSpacing);

function lineSpacing(){	
	const LIST=document.getElementById('bttn-ul');//ul or ol of possible line heights
	const BTTN=document.getElementById('foo'); //SVG or other button
	const TARGETS=document.getElementsByClassName('alter-lh');//elements classed to be altered
	const LIST_ITEMS=LIST.getElementsByTagName('li');
	let targets_arr=[...TARGETS];//converting html collections into arrays in order to use forEach
	let list_arr=[...LIST_ITEMS];
	
	BTTN.addEventListener('click',listVisible);//adding event listeners to elements
	list_arr.forEach(item => {item.addEventListener('click', changeValue)});	
	
	function listVisible(){
		LIST.classList.toggle("peekaboo-1");//html:<tag class="peekaboo-1"> css:.peekaboo-1{display:none;}
		LIST.classList.toggle("peekaboo-2");//css:.peekaboo-2{display:block;} 
		BTTN.classList.toggle("light-up");//css:.light-up{fill:#XXXXXX;}
	}
	function changeValue(){
		list_arr.forEach(e => e.classList.remove("current"));
		this.classList.add("current");
		let size=this.innerText;
		targets_arr.forEach(e=> e.style.lineHeight=size);
		listVisible();//resets visual cues
	}
}