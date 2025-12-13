const numero = document.getElementById("inNumber")
const soma = document.getElementById("Soma");
const subtracao= document.getElementById("Subtracao");
const reset=document.getElementById("reset");

soma.addEventListener("click",()=>{
   let num = Number(numero.value)
   num++
   numero.value = num 
    
})
subtracao.addEventListener("click",()=>{
   let num = Number(numero.value)
   num--
   numero.value = num 
    
})
reset.addEventListener("click",()=>{
   numero.value = 0
})