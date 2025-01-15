// const lista = ["Uva", "papel" , "ovo"]
// lista.unshift("óleo")
// console.log(lista)
// lista.pop()
// lista.shift()


const lista = [ 10, 20, 14, 7, 8, 11, 19 ]
let somaDalista = 0 

for (let i = 0; i <= 50; i++){
lista.push(18 + i)

}


for (let i = 0; i < lista.length; i++){
    somaDalista+= lista[i] //somaDaLista = somaDaLista + lista[i]
}

console.log(parseInt(somaDalista/lista.length))

Desafio
