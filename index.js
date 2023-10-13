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
      
      let likeContainer = document.createElement("div")
      likeContainer.className="likes-container"
      let likeCount = 0
      let likes = document.createElement("h2")
      likes.textContent= likeCount;
      likeContainer.appendChild(likes)
      let likeImage =document.createElement("img")
      likeImage.src="./images/heart.gif"
      likeImage.id="heart"
      let btn = document.createElement("button");
      btn.id= "like-btn"
      btn.textContent = "Like"
      btn.addEventListener("click",()=>{
        btn.style.color="red"
        btn.id="liked"
        likeCount++
        likes.textContent=likeCount
        btn.disabled= true;
      })

      let commentSection = document.createElement("form")
      commentSection.id ="comment-section"
      let commentInput = document.createElement("textarea")
      commentInput.id="comment-input"
      let commentSubmit = document.createElement("button")
      commentSubmit.id = "comment-btn"
      commentSubmit.type="submit"
      commentSubmit.textContent="comment"
      commentSubmit.addEventListener("click",(e)=>{
        e.preventDefault()
        gotDiv.id = "gotDivComments"
        let commentViewer = document.createElement("div")
        commentViewer.id ="comments-viewer"
        let comments = document.createElement("h3")
        comments.id="comments"
        let deleteComment = document.createElement('button')
        deleteComment.textContent="delete"
        deleteComment.id="delete-btn"
        deleteComment.addEventListener("click",()=>{
          commentViewer.remove()
        })
        comments.textContent= commentInput.value
        commentViewer.appendChild(comments)
        commentViewer.appendChild(deleteComment)
        gotDiv.appendChild(commentViewer)
      })
      commentSection.appendChild(commentInput)
      commentSection.appendChild(commentSubmit)
      likeContainer.appendChild(likeImage)
      likeContainer.appendChild(btn)
      gotDiv.appendChild(likeContainer)
      gotDiv.appendChild(commentSection)
      characterDiv.appendChild(gotDiv)
    })
      console.log(characters)

      fetch(url)
      .then((res) => res.json())
      .then((characters) => {
        console.log(characters);
  
        // Search functionality
        document.getElementById("search").addEventListener("click", (e) => {
          e.preventDefault()
          const searchInput = document.getElementById("search-bar").value.toLowerCase();
          console.log(searchInput)

          characters.forEach((character) => {
            const characterName = character.fullName.toLowerCase();
            if (characterName.includes(searchInput)) {
              gotDiv.style.display = "block"; 
            } else {
              gotDiv.style.display = "none"; 
            }
          });
        });
      })
      })
  .catch(err => console.log(err))
})