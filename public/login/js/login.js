const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

var state=false;

function toggle()
{
	if (state)
	{
document.getElementById("password") 
setAttribute("type","password");
state=false;
	}

	else{

		document.getElementById("password") 
setAttribute("type","password");
state=true; 
	}

}



function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
