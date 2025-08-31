let Random = Math.floor(Math.random()*10)+1 ;
let contV =0
let contD =0
let res = document.getElementById("resultado")
let PCres = document.getElementById("PCresultado")
let vitoria = document.getElementById("vitoria")
let derrota = document.getElementById("derrota")
function pegarNumero(x){

 res.innerText = "Você escolheu "+ x
  
  if (x == Random){
contV++
    vitoria.innerHTML = "vezes que você ganhou "+ contV
  }else {
    contD++
    derrota.innerHTML = "vezes que você perdeu "+ contD
  }

}
function random(){
  
  let Random = Math.floor(Math.random()*10)+1 ;
  PCres.innerHTML = "O computador escolheu "+ Random 
}

function resetar(){
 res.innerText = "Você escolheu " +0
  PCres.innerText = "O computador escolheu "+ 0
  vitoria.innerHTML = "vitoria "+ 0
  derrota.innerHTML = "derrota "+ 0
  contD =0
  contV = 0

 
}



