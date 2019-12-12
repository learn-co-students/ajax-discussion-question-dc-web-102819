const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.querySelector('button').addEventListener('click', addPerson)
});


function addPerson() {
	fetch('https://randomuser.me/api/')
		.then(response => response.json())
		.then(json => renderData(json.results[0]))
}

function renderData(json) {
	console.log(json)

	let name = document.querySelector('#fullname')
	name.innerText = `${json.name.title}. ${json.name.first} ${json.name.last}`

	let email = document.querySelector('#email')
	email.innerText = `${json.email}`

	let street = document.querySelector('#street')
	street.innerText = `${json.location.street.number} ${json.location.street.name}`

	let city = document.querySelector('#city')
	city.innerText = `${json.location.city}`

	let state = document.querySelector('#state')
	state.innerText = `${json.location.state}`

	let postcode = document.querySelector('#postcode')
	postcode.innerText = `${json.location.postcode}`

	let phone = document.querySelector('#phone')
	phone.innerText = `${json.phone}`

	let cell = document.querySelector('#cell')
	cell.innerText = `${json.cell}`

	let dob = document.querySelector('#date_of_birth')
	dob.innerText = `${json.dob.date}`
}