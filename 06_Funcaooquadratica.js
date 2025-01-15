let a = 2
let b = -4
let c = -6
let delta = (b*b) - (4*a*c)
let raizP = (-b + Math.sqrt(delta))/(2*a)
let raizN = (-b - Math.sqrt(delta))/(2*a)

if(delta > 0 ){
   console.log(`Raiz positiva: ${raizP}  
   Raiz Negativa: ${raizN}`) 
}

if(delta == 0 ){
   console.log(`As raízes são iguais`, raizP)
}
if(delta < 0 ){
    console.log(`Não existe Raiz`)
 }
 