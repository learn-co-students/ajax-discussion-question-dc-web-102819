

document.addEventListener("DOMContentLoaded", () => {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {data.results.forEach((attr) => getAttr(attr))})
})

function getAttr(event){
  
  const name = document.querySelector('#fullname')
   name.innerText = `${event.name.title}. ${event.name.first}`
  const email = document.querySelector('#email')
  const datebirth = document.querySelector('#date_of_birth')
  const cell = document.querySelector('#cell')
  const state = document.querySelector('#state')
  const postCod = document.querySelector('#postcode')
  const street = document.querySelector('#street')
  const city = document.querySelector('#city')
  const adress = document.querySelector('#street')

}
