function soma(n1=0,n2=0) { /* foi posto =0 para não dar NaN na função, se não tivesse feito isso teria que poder sempre algum valor para somar, assim se não for posto nenhum valor, vai ser equivalente a zero*/
    return n1 + n2
}
console.log(soma(2,5))