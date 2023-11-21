const frm= document.querySelector("form")
const Resp1= document.querySelector("#outResp1")
const Resp2= document.querySelector("outResp2")
const Resp3= document.querySelector("outResp3")

frm.addEventListener("submit" ,(e)=> {
e.preventDefault()

const saque = Number (frm.inSaque.value)

if (saque % 10 !=0) {
     alert("valor inválido para notas dísponíveis  (R$ 10,50.100)")
     frm.inSaque.focus()
     return
}

const notasCem= Math.floor(saque/100)
let resto = saque % 100
const notasCinquenta  = Math.floor(resto/50)
resto = resto % 50 
const  notasdez = Math.floor(resto/10)

if (notasCem > 0 ) {
     Resp1.innnerText= ` Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta>0){
        Resp2.innnerText= `Notas de R$ 50: ${notasdeCinquenta}`
       }
       if(notasdez>0){
           Resp3.innnerText=`Notas de R$ 10: ${notasdez}`
       }
    })     
       
