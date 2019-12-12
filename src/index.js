const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let button = document.getElementById("main_btn") 
  button.addEventListener("click" , buttonClick)
});



function buttonClick() {
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(json => LoadPage(json))
  .then(json => console.log(json) )
}


  function LoadPage(json) {
  document.getElementById("phone").innerText = json.results[0].phone 
  document.getElementById("cell").innerText = json.results[0].cell
  document.getElementById("date_of_birth").innerText = json.results[0].dob.date
  document.getElementById("email").innerText = json.results[0].email 
  document.getElementById("fullname").innerText = json.results[0].name.first + '  ' +  json.results[0].name.last
  document.getElementById("street").innerText = json.results[0].location.street.number + '' + json.results[0].location.street.name  
  document.getElementById("city").innerText = json.results[0].location.city 
  document.getElementById("state").innerText = json.results[0].location.state 
  document.getElementById("postcode").innerText = json.results[0].location.postcode 

}