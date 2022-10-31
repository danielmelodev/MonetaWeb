const url = "http://localhost:2022/api";

// function getBancos(){
//   fetch(url)
//   .then(reponse => reponse.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
// }
function getBancosApi() {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach((banco) => {
        const dataBanco = `<li>
        <div>
            <img src="${banco.avatar}">
            <h3>${banco.name}</h3>
            <p>${banco.desc}</p>
        </div>
    </li>`;
        document
          .querySelector(".flex")
          .insertAdjacentHTML('beforeend',dataBanco);
      });
    });
}

getBancosApi()
