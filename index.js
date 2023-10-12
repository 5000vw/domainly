document.addEventListener("DOMContentLoaded", ()=> {
const url = `https://api.domainsdb.info/v1/domains/search?limit=50,`
  fetch(url)
  .then(res => res.json())
  .then(domains => {
    console.log(domains)
  })
  .catch(err => console.log(err))
})