/* [] vetor/aray e {} objeto*/
let amigo = {nome:'José',
 sexo:'M',
 peso: 80,
engordar(p=0){  /* p=0 significa de não for posto nenhum valor, é 0*/ /* criamos uma função dentro de uma variavel*/
    console.log('Engordou')
    this.peso += p
}} 

/*amigo.engordar(2) para engordar quantos quilos quiser*/
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)