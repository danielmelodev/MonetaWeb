const url = "http://localhost:2022/emprestimo";
const url2 = "http://localhost:2022/financiamento";

function getEmprestimoApi() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
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
          .insertAdjacentHTML("beforeend", dataBanco);
      });
    });
}

function getFinancimentoApi() {
  fetch(url2)
    .then((response) => {
      return response.json();
    })
    .then((banco) => {
      banco.forEach((item) => {
        const financiamento = `
      <li>
        <div>
            <img src="${item.avatar}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        </div>
    </li>`;
    document.querySelector(".financiamento").insertAdjacentHTML("beforeend", financiamento)
      });
    });
}

getFinancimentoApi();
getEmprestimoApi();
