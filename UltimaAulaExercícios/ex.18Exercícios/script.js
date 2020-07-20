let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) { /* tradução = se o número for realmente um número e também se ele não estiver na lista. Significado de ! = não */
        valores.push(Number(num.value)) /*push() singnifica adicionar um elemento num vetor*/
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' /* para apagar o número digitado da coluna e dar espaço para ser digitado outro número logo após*/
    num.focus() /* para a barra de digitação continuar na coluna para digitar o próximo número */
}
function finalizar() {
      if (valores.length == 0) { /* tradução = se o vetor estiver fazio, q no caso significa zero */
          window.alert('Adicione valores antes de finalizar.')
      } else {
        let total = valores.length /* para saber quantos elementos meu vetor tem */
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores) {
            soma += valores[pos] /* foi feito isso para poder somar todos os valores */
            if ( valores[pos] > maior) 
            maior = valores[pos]
            if ( valores[pos] < menor)
            menor = valores[pos] /* foi feito isso para saber qual é o valor menor e qual é o valor maior */
        }
        media = soma / total /* foi feito isso para termos uma média dos valores */
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} de números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}.</p> `
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média do valores é ${media}</p>`
      }
}