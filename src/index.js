document.addEventListener("DOMContentLoaded", () => {
  fetch("https://randomuser.me/api/")
    .then( res => res.json() )
    .then(data => 
      {data.results.forEach((attributes) => 
      grabInfo(attributes))
      }  
    )}
)

function grabInfo(event){
  // const labelFor = event.
  const grablabels = document.querySelectorAll("label")
  for(let i = 0; i < grablabels.length; i++){
    const grabFor = grablabels[i].innerHTML

    console.log(grabFor)
  }

  
}
