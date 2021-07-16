const seats = document.querySelector('.seats')
var booked  = 0
var vacant=36
for(i=0;i<36;i++){
	let box = document.createElement('div');
	box.setAttribute('class','box')
    box.setAttribute('id',i)
	
	// box.classList.add('basic')
	box.addEventListener('click',() =>{
		if(box.classList.contains('selected')){
			box.classList.remove('selected')
			
			booked-=1
			vacant+=1
			document.getElementById('jsvac').innerText=vacant
			document.getElementById('jsbook').innerText=booked
			
		}
		else{
			box.classList.add('selected')
			booked+=1
			vacant-=1
			document.getElementById('jsvac').innerText=vacant
			document.getElementById('jsbook').innerText=booked

			
		}
		if(vacant===0){
			alert('all seats are booked');
			
		}

		// box.classList.toggle('selected');
	});
	
	seats.appendChild(box)
}