var banco = document.getElementById('valor')
var res = document.getElementById('res')
var qbanco = document.getElementById('qbanco')
var botao1 = document.getElementById('b1')
var chamada = document.getElementById('chamada')
var tbancos = []
var tcartoes = []
var tgastos = []
var adc = document.getElementById('adc')


//Simulando o click com enter no botão adicionar principal
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        botao1.click()
    }
})

function adicionar() {
        if (banco.value.length == 0) //Caso o usuário não coloque um valor
    {
        window.alert('[ERRO] Faltam dados!')
    }
    if (qbanco.value === "") //Caso o usuário não escolha um banco
    {
        window.alert('[ERRO] Escolha um banco!')
    } else  if (banco.value.length > 0) {
        
        let paragrafo = document.createElement("p"); // crio o elemento <p>
        let texto = document.createTextNode(`${banco.value} ${qbanco.value}`); // defino o texto
        paragrafo.appendChild(texto); // insiro o texto no elemento <p>
        res.appendChild(paragrafo); // insiro na página
        tbancos.push(Number(banco.value))
        console.log(tbancos)
    }
       
}

function ircartoes() {
    //Alterando elementos div com innerHTML
    var xcartoes = document.getElementById('passatipo')
    chamada.innerHTML = "Digite a fatura do seu cartão:"
    xcartoes.innerHTML = `<input id="passatipo" type="button" value="Acabaram os cartões" onclick="irgastos()">`
    adc.innerHTML = `<input type="button" value="Adicionar" onclick="adicionar2()" id="b1">`
    
    //Somando os bancos com for
    let sum = 0
    for (let i = 0; i < tbancos.length; i++){ //Enquanto i for < que a quantidades de item na lista ele soma os itens da lista
        sum+=tbancos[i]
    }
    //Para colocar os resultados um depois do outro
    
        
    let paragrafo = document.createElement("p");//Crio um elm parágrafo
    let texto = document.createTextNode(`${sum} Total dos bancos`);//Crio um texto
    paragrafo.appendChild(texto);//Introduzo o texto no parágrafo
    res.appendChild(paragrafo);//Introduzo o parágrafo já com o texto na div
    
}




function adicionar2() {
    if (banco.value.length == 0) 
{
    window.alert('[ERRO] Faltam dados!')
}
if (qbanco.value === "") 
{
    window.alert('[ERRO] Escolha um banco para sua fatura!')
} else  if (banco.value.length > 0) {
    
    var paragrafo = document.createElement("p"); 
    var texto = document.createTextNode(`${banco.value} ${qbanco.value}`); 
    paragrafo.appendChild(texto); 
    res.appendChild(paragrafo); 
    tcartoes.push(Number(banco.value)) //Coloco o valor em uma lista fora da função
    
}
   
}

function irgastos() {
    //Nesse momento decidi olcultar a div inteira e apresentar uma nova para continuar manipulando sem usar innerHTML
    var xgastos = document.getElementById('gastos')
    var div1 = document.getElementById('div1') 
    
    //Faço isso atravez do display dentro css
    if (xgastos.style.display === "block") {
        xgastos.style.display = "none"
    } else {
        xgastos.style.display = "block"
    }

    if (div1.style.display === "none") {
        div1.style.display = "block"
    } else {
        div1.style.display = "none"
    }

    let sum1 = 0
    for (let i = 0; i < tbancos.length; i++){ 
        sum1+=tbancos[i]
    }
    
    var resultadoBan = sum1

    let sum = 0
    for (i = 0; i < tcartoes.length; i++){
        sum+=tcartoes[i]
    }

    var resultadoCar = sum
        
    let paragrafo = document.createElement("p")
    let texto = document.createTextNode(`${resultadoBan - resultadoCar} Resultado`)
    paragrafo.appendChild(texto)
    res.appendChild(paragrafo)

}

var banco3 = document.getElementById('valor3')
var qbanco3 = document.getElementById('qbanco3')
var botao1_3 = document.getElementById('b1_3')
var chamada3 = document.getElementById('chamada3')

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        botao1_3.click()
    }
})


function adicionar3() {
    if (banco3.value.length == 0) {
        window.alert('[ERRO] Prencha o valor do gasto!')
    } else if (qbanco3.value === "") {
        window.alert('[ERRO] Escolha o nome do gatos!')
    } 
    
    
    let paragrafo = document.createElement('p')
    let texto = document.createTextNode(`${banco3.value} ${qbanco3.value}`)
    paragrafo.appendChild(texto)
    res.appendChild(paragrafo)
    tgastos.push(Number(banco3.value))

}

//Para raticar o uso de parametros dentro da função:
function somartl(total) {
    
    let sum = 0
    for (i = 0; i < total.length; i++){
        sum+=total[i]
    }
    
    let sum1 = 0
    for (let i = 0; i < tbancos.length; i++){ 
        sum1+=tbancos[i]
    }
    
    var resultadoBan = sum1

    let sum2 = 0
    for (i = 0; i < tcartoes.length; i++){
        sum2+=tcartoes[i]
    }

    var resultadoCar = sum2

    var sum3 = resultadoBan - resultadoCar
    var sum4 = sum3 - sum

    let paragrafo = document.createElement('p')
    let texto = document.createTextNode(`${sum4} Resto`)
    paragrafo.appendChild(texto)
    res.appendChild(paragrafo)


}

function concluir() {
    somartl(tgastos)    
}

//Para concluir consegui dentro dessa solução aplicar a maior parte dos conseitos básicos que aprendi e resolver problemas novos peueisando, ao mesmo tempo que fui observando que se trabalhasse com objetos e funções parametizadas diminuiria a quantidade de código.