//Desafio
//Criar uma lista com o listaNumerosFavoritos que contará 10 numeros
// Atrá de uma função voces vão comparar se o número está enviando na função 
// retornem um console.log falando que já existe ou não 
// Já existe na lista de números favoritos

const listaNumerosFavoritos = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]

function validador (numero){ 
    let esseNumeroExiste
    for(let i = 0; i < listaNumerosFavoritos.length; i++){
        if(numero == listaNumerosFavoritos[i]){
            console.log('Esse numero já existe')

    }
    else{
        esseNumeroExiste = false
   }
   }
 if(esseNumeroExiste == false){
   console.log('Esse número não existe')
   }
}

validador(5)



    
