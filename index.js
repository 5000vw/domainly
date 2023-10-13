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
      <img id="imageUrl" src=${character.imageUrl} />
      <h2>${character.fullName}</h2>`
      
      const likeFunc =()=>{
        btn.style.color="red"
        btn.id="liked"
        let newlike = likes++
        likes.textContent=newlike
        btn.disabled= true;
      }
      let likeCont = document.createElement("div")
      likeCont.className="likes-container"
      let likes = document.createElement("h2")
      likes.textContent= 0;
      likeCont.appendChild(likes)
      let btn = document.createElement("button");
      btn.id= "like-btn"
      btn.textContent = "Like"
      btn.addEventListener("click",likeFunc)
      likeCont.appendChild(btn)
      gotDiv.appendChild(likeCont)
      characterDiv.appendChild(gotDiv)
    })
      console.log(characters)
    })
  .catch(err => console.log(err))
})