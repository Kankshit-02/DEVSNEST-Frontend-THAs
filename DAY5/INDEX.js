window.onload = () =>{
	const first_input = document.getElementById("first")
	const second_input = document.getElementById("second")

	const buttons=document.querySelectorAll("button"); 

	const addButton=buttons[0];
	const subButton=buttons[1];
	const mulButton=buttons[2];
	const divButton=buttons[3];


	const addHandler = function(){
		const result=document.getElementById('result');
		const sum = parseInt(first_input.value) + parseInt(second_input.value) ;
		result.innerHTML = "The result of operator is: " + sum;
	}

	const subHandler = function(){
		const result=document.getElementById('result');
		const sub= parseInt(first_input.value)-parseInt(second_input.value);
		result.innerHTML = "The result of operator is: " + sub

	}
	const mulHandler = function(){
		const result=document.getElementById('result');
		const mul= parseInt(first_input.value)*parseInt(second_input.value);
		result.innerHTML = "The result of operator is: " + mul
		
	}
	const divHandler = function(){
		const result=document.getElementById('result');
		const div= parseInt(first_input.value)/parseInt(second_input.value);
		result.innerHTML = "The result of operator is: " + div
		
	}

	addButton.addEventListener('click', addHandler)
	subButton.addEventListener('click', subHandler)
	mulButton.addEventListener('click', mulHandler)
	divButton.addEventListener('click', divHandler)
};