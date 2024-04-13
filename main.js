var resultado = document.getElementById('resultado')
function soma(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var soma = n1 + n2
    resultado.innerText = soma
}
function sub(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var sub = n1 - n2
    resultado.innerText = sub
}
function mult(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var mult = n1 * n2
    resultado.innerText = mult
}
function div(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var div = n1 / n2
    if (n2 === 0){
        resultado.innerText = "Erro: Divisão por zero";
    } else if(n2 === null){
        resultado.innerText = "Erro: Digite um segundo valor";
    }else{
        resultado.innerText = div
    }
}
