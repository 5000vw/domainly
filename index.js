document.addEventListener("DOMContentLoaded", ()=> {
  const characterDiv =  document.querySelector('.character-div')
const url = `https://thronesapi.com/api/v2/Characters`
  fetch(url)
  .then(res => res.json())
  .then(characters =>{
    characters.forEach(character =>{

      let gotDiv = document.createElement("div");
      gotDiv.id="got-div";
      gotDiv.innerHTML=`
      <img src=${character.imageUrl} />
      <h2>${character.fullName}</h2>`
      

      let btn = document.createElement("button");
      btn.textContent = "like"
      btn.addEventListener("click",likeFunc)

      const likeFunc =()=>{
        btn.style.color="red"
      }

      characterDiv.appendChild(gotDiv)
    })
      console.log(characters)
    })
  .catch(err => console.log(err))
})