const corpoTabela = document.querySelector("#corpoTabela");
const linhaTabela = document.querySelector("#linhaTabela")
const cabecaTabela = document.querySelector("#cabecaTabela");
const botaoCalcular = document.querySelector("#btn1");
const botaoCancelar = document.querySelector("#btn2");
const textoValor = document.querySelector("#valor");
const textoEntrada = document.querySelector("#entrada");
const textoTaxaJuros = document.querySelector("#taxas");
const textoPrazo = document.querySelector("#prazo");
const tables = document.querySelector("#table");

/* Parcelas */

class Parcela {
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numero, valor, juros, amortizacao, saldo){
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = saldo;
    }

    getSaldo() {
        return this.#saldo;
    }

    getDadosFormatados() {
        const dados = [];
        dados.push(this.#numero);
        dados.push(this.#valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#amortizacao.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#juros.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        return dados;
    }
}

/* Financiamento */

class Financiamento {
    #taxaJuros;
    #prazo;
    #parcelas = [];
    constructor(valor,entrada,taxaJuros,prazo){
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        this.#parcelas.push(new Parcela(0,0,0,0,valor - entrada));
    }

    static calcJuros(valor, taxaJuros) {
        return valor * (taxaJuros / 100);
    }

    calcParcelasMensais() {
        let saldo = this.#parcelas[this.#parcelas.length - 1].getSaldo();
        let prazo = this.#prazo - (this.#parcelas.length - 1);
        let amortizacao = saldo / prazo;
        for(let i=0; i < prazo; i++) {
            const numero = this.#parcelas.length;
            const juros = Financiamento.calcJuros(saldo,this.#taxaJuros);
            const valor = juros + amortizacao;
            saldo -= amortizacao;
            if (saldo < 0) (saldo = 0);
            this.#parcelas.push(new Parcela(numero,valor,juros,amortizacao,saldo));
        }
    }

    exibeParcelas() {
        const parcelas = this.#parcelas.slice(1);
        for(const parcela of parcelas) {
            const linha = corpoTabela.insertRow(-1);
            for (const dado of parcela.getDadosFormatados()){
                const celula = linha.insertCell(-1);
                celula.textContent = dado;
            }
        }
    }

    apagarParcelas() {
        const parcelas = this.#parcelas.splice(1,0);
        for(const parcela of parcelas) {
            const linha = corpoTabela.deleteRow(1,0);
            for (const dado of parcela.getDadosFormatados()){
                const celula = linha.remove();
                celula.textContent = dado;
            }
        }
    }
}

botaoCalcular.addEventListener('click', function() {
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});

botaoCancelar.addEventListener('click', function() {
    corpoTabela.remove();
});