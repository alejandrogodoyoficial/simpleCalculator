let numOne = document.getElementById('numOne');
let numTwo = document.getElementById('numTwo');
let math = document.getElementById('math');
let button = document.getElementById('button');
let result = document.getElementById('result');
let history = document.getElementById("historyContainer");
let i = 1;


button.addEventListener("click", function(){
	if(math.value == "plus"){
		result.value = (parseInt(numOne.value, 10) || 0) + (parseInt(numTwo.value, 10) || 0);
	}else if(math.value == "minus"){
		result.value = (parseInt(numOne.value, 10) || 0) - (parseInt(numTwo.value, 10) || 0);

	}else if(math.value == "multiplied"){
		result.value = (parseInt(numOne.value, 10) || 0) * (parseInt(numTwo.value, 10) || 0);
	}else if(math.value == "divided"){
		result.value = (parseInt(numOne.value, 10) || 1) / (parseInt(numTwo.value, 10) || 1);
	}
	console.log(result.value);
	history.innerHTML += `<p class="history"><span class="index">${i}.- </span>${result.value}</p>`;
	i++;
})