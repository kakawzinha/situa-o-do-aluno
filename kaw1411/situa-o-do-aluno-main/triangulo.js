const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("outresp1")

//ouvinte
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(form.inladoA.value)
    const ladoB=Number(form.inladoB.value)
    const ladoC= Number(form.inladoC.value)

    if((ladoA> ladoB +ladoC) || (ladoC>ladoA+ladoB)){
        alert("esssas medidas não podem formar um triangulo.Um dos lados não pode ser maior que a soma dos outros dois.")
form.inladoA.focus()
form.inladoB.focus()
form.inladoC.focus()
return
    }

    resp.innerText= `lados podem formar um triangulo`

    if(ladoA== ladoB && ladoA == ladoC){
        resp1.innerText= "tipo: equilátero"
    } else if ((ladoA==ladoB)|| (ladoA==ladoC) || (ladoB== ladoC)){
        resp1.innerText="tipo:isóceles"
    }else{
        resp1.innerText= "tipo: escaleno"
}
})




