const Frm = document.querySelector("form")
const resp =  document.querySelector("h4")

//ouvinte 

Frm.addEventListener("submit",(e)=>{
     e.preventDefault()

     const pessoas = Number(Frm.inNumero.value)
     const peixe = Number(Frm.inPeixe.value)
     let resultado
     if (peixe>pessoas) {
         resultado= (pessoas * 20 ) + ((peixe - pessoas)* 12)
     }else {
         resultado = pessoas * 20
     }

     resp.innerText=  `N° de pessoas :${pessoas} \n
                       N° de peixes:${peixe}\n
                       Pagar:  R$   ${resultado.toFixed(2)}`
    })                     