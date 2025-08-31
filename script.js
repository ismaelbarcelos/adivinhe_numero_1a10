
let contV =0
let contD =0
let res = document.getElementById("resultado")
let PCres = document.getElementById("PCresultado")
let vitoria = document.getElementById("vitoria")
let derrota = document.getElementById("derrota")
function pegarNumero(x){

 res.innerText = "Você escolheu "+ x

 let Random = Math.floor(Math.random()*10)+1 ;
  PCres.innerHTML = "O número era "+ Random 
 
  if (x == Random){
contV++
    vitoria.innerHTML = "vezes que você ganhou 😎: "+ contV
    
  }else {
    contD++
    derrota.innerHTML = "vezes que você perdeu 😞: "+ contD
    
  }

}
//function random(){
  
//  let Random = Math.floor(Math.random()*10)+1 ;
// PCres.innerHTML = "O número era "+ Random 
  
//}

function resetar(){
 res.innerText = "Você escolheu ?"
  PCres.innerText = "O número será..."
  vitoria.innerHTML = "vezes que você ganhou 😎: "
  derrota.innerHTML = "vezes que você perdeu 😞:" 
  contD =0
  contV = 0

 
}



