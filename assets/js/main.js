const url = "http://localhost:2022/api"

function getBancos(){
  fetch(url)
  .then(reponse => reponse.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}

function getBanco(){
  fetch(`${url}/1`)
  .then(response => response.json())
  .then(data => {
    bancoApi.textContent = data.name
    bancoApiImg.src = data.avatar
    bancoApiDesc.textContent = data.desc
  })
  .catch(error => console.error(error))
  fetch(`${url}/2`)
  .then(response => response.json())
  .then(data => {
    bancoApi2.textContent = data.name
    bancoApiImg2.src = data.avatar
    bancoApiDesc2.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/3`)
  .then(response => response.json())
  .then(data => {
    bancoApi3.textContent = data.name
    bancoApiImg3.src = data.avatar
    bancoApiDesc3.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/4`)
  .then(response => response.json())
  .then(data => {
    bancoApi4.textContent = data.name
    bancoApiImg4.src = data.avatar
    bancoApiDesc4.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/5`)
  .then(response => response.json())
  .then(data => {
    bancoApi5.textContent = data.name
    bancoApiImg5.src = data.avatar
    bancoApiDesc5.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/6`)
  .then(response => response.json())
  .then(data => {
    bancoApi6.textContent = data.name
    bancoApiImg6.src = data.avatar
    bancoApiDesc6.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/7`)
  .then(response => response.json())
  .then(data => {
    bancoApi7.textContent = data.name
    bancoApiImg7.src = data.avatar
    bancoApiDesc7.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/8`)
  .then(response => response.json())
  .then(data => {
    bancoApi8.textContent = data.name
    bancoApiImg8.src = data.avatar
    bancoApiDesc8.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/9`)
  .then(response => response.json())
  .then(data => {
    bancoApi9.textContent = data.name
    bancoApiImg9.src = data.avatar
    bancoApiDesc9.textContent = data.desc
  })
  .catch(error => console.error(error))

  fetch(`${url}/10`)
  .then(response => response.json())
  .then(data => {
    bancoApi10.textContent = data.name
    bancoApiImg10.src = data.avatar
    bancoApiDesc10.textContent = data.desc
  })
  .catch(error => console.error(error))

}
getBanco()
getBancos()