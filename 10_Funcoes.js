// var numero1 = 10 
// var numero2 = 12 
// var numero3 = 16
// var numero4 = 20
// console.log(numero1 + numero2)
// console.log(numero1 - numero2)
// console.log(numero1 * numero2)

// function soma(n1 , n2)
// //Criação da função 
// // Nome da função 
// //() --> Parâmetros da função, que nesse caso seria  
// // numero1 e numero2
// // Função sem Retorno

// {
//     console.log(n1 + n2)

// }

// soma(20 , 30)

// function retorno(){

// return 5
// }
// var resultado = retorno() + 10 
// console.log(resultado)

function validador(email){
     let email1 = 'fulaninho@gmail.com'
     let email2 = 'beltramimho@gmail.com'
     if(email == email1 || email == email2){
        console.log('voce não pode cadastrar esse email, pois esse email já existe')
        return false 
}else{
    return true
}
}
var podeCadastrar = validador ('beltramimho@gmail.com')
console.log(podeCadastrar)

if(podeCadastrar){
  console.log('Você se cadastrou com sucesso!')
}