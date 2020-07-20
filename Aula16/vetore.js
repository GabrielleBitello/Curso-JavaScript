let valores = [ 5, 3, 8, 7, 9, 4]
console.log(valores)


/* for (let pos= 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/* as duas funções são a mesma coisa, a segunda é mais simplificada. */