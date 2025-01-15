// 1. Criação de Lista de Frutas
//  Crie uma lista vazia chamada frutas. Adicione os itens "maçã", "banana" e "laranja" usando o
// método push().
//  Objetivo: Praticar criação de arrays e uso de push().

// const frutas = []
// frutas.push('Maça' , 'banana' , 'laranja')
//  console.log(`As frutas escolhidas foram: ${frutas}`)

// 2. Remoção de Elemento com splice()
//  Dada a lista const numeros = [1, 2, 3, 4, 5], remova o número 3 usando o método splice().
//  Objetivo: Aprender a remover um item específico pelo índice.

// const numeros = [1, 2, 3, 4, 5]
// numeros.splice(3,1)
// console.log(numeros)

// 3. Inserção de Elemento com splice()
//  Usando a mesma lista de numeros, insira o número 99 na posição 2 com o método splice().
//  Objetivo: Entender como adicionar elementos em uma posição específica.

// const numeros = [1, 2, 3, 4, 5]
// numeros.splice(1,1,99)
// console.log(numeros)

// 4. Criação de Função com for e push()
//  Escreva uma função adicionarNumeros(n) que cria e retorna uma lista de números de 1 até n
// usando um laço for.
//  Objetivo: Combinar laços de repetição e arrays.

// function  adicionarNumeros {
// const Numeros = []
// for (let i = 1; i <= n; i++)
// }
// return numeros
 

//  5. Multiplicação de Números em uma Lista
//  Multiplique cada número da lista const numeros = [2, 4, 6, 8] por 2 e armazene os resultados em
// uma nova lista usando push().
//  Objetivo: Usar loops para manipular dados em arrays.

// const numeros = [2, 4, 6, 8]
// const resultado =[]
// let multiplicação = numeros*2

// 6. Remoção de Vários Elementos com splice()
//  Dada a lista const itens = ["cadeira", "mesa", "sofá", "lâmpada", "tapete"], remova "sofá" e
// "lâmpada" em uma única operação usando splice().
//  Objetivo: Trabalhar com múltiplos itens em uma única chamada de splice().

// const itens = ["cadeira" , "mesa " , "sofá", "lâmpada" , "tapete"];
// const paraRemover = [2,3];
// itens.splice (2,2);
// console.log(itens);

// 7. Substituição de Elemento em Lista
//  Substitua "mesa" por "mesa de vidro" na lista itens usando splice().
//  Objetivo: Praticar substituição de valores.

// const itens = ["cadeira" , "mesa " , "sofá", "lâmpada" , "tapete"];
// const paraRenomear = [1, "mesa"];
// itens.splice(1,1,"mesa de vidro");
// console.log(itens);

// 8. Inserção de Itens Antes de Outro
//  Adicione "quadro" e "vaso" antes de "tapete" na lista itens.
//  Objetivo: Posicionar novos elementos em uma lista com splice()

// const itens = ["cadeira" , "mesa " , "sofá", "lâmpada" , "tapete"];
// itens.splice( 4, 4, "Quadro" ,"Vaso" , "Tapete");
// console.log(itens); 


// 1. Gerenciando Estoque de Roupas
//  Você administra o estoque de uma loja com a lista const estoque = ["camiseta", "calça", "jaqueta",
// "blusa"].
//  - Adicione "sapato" e "meia" usando push().

// const estoque = ["camiseta", "calça" , "jaqueta" , "blusa"];
// estoque.push('sapato', 'meia');
// console.log(estoque);

// 2. Substituindo Produtos no Estoque
//  Substitua "calça" por "bermuda" usando splice().

const estoque = ["camiseta", "calça" , "jaqueta" , "blusa"];
const substituir =[1, "calça"];
estoque.splice (1,1, "Bermuda");
estoque
console.log(estoque);

//Lista Par

const numeros = [58, 13, 92, 37, 61, 48, 85, 74, 22, 8];
var par = 0
var impar = 0

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0

  if (numeros[i] % 2 == 0) {
    par++;
} else {
    impar++;
}
} 

console.log(par);
console.log(impar);











