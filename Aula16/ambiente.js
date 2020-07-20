let num = [ 5, 8, 2, 9, 3]
num.sort() /*ele organiza de forme crescente*/
console.log(num)
console.log(`O vetor tem ${num.length} posições `) /* 'length' quer dizer tamanho/quatidade*/
 console.log(`O primeiro vetor é o ${0}`) /*sempre a primeira posição vai ver 0 e não 1*/
 let pos = num.indexOf(5) /* ele acha se o valor existe, digitei 4 não existe, mas se eu digitar 5 ele vai existir e está na posição 0, que é o primeiro*/
 if (pos == -1) {
     console.log('O valor não foi encontrado.')
 } else {
     console.log(`O valor está na posição ${pos}`)
 }
