function contar() {
    /* pode usar let ou var para criar variavel, usamos let para fazer algo difente do que já vinhamos fazendo.*/
   let inicio =  document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')

   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       window.alert('[Erro] Faltam dados.')
       res.innerHTML= 'Impossível contar.'
   } else {
        res.innerHTML = 'Contando: <br> '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if ( p <= 0) {
            window.alert('Passo inválido, considerado PASSO 1')
            p = 1
        }
        if ( i < f ) { /*contagem crescente*/
            for (let c = i; c <= f; c+= p) {
            res.innerHTML += ` ${c} \u{1F698} `
            }
        } else {
            for ( let c = i; c >= f; c-= p ) { /*contevem decrescente*/
                res.innerHTML += `${c} \u{1F698}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
       
}
